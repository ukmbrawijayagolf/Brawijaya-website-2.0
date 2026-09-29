import os
from PIL import Image
import numpy as np
import rembg

os.makedirs('public/assets/pengurus', exist_ok=True)
os.makedirs('src/assets/pengurus', exist_ok=True)

# Target dimensions
TARGET_W, TARGET_H = 600, 750

# Pre-crop bounding boxes (left_ratio, top_ratio, right_ratio, bottom_ratio)
# to isolate upper half-body (head to waist)
CROPS = {
    'ketua': ('src/assets/ketua.webp', 0.15, 0.08, 0.85, 0.56),
    'wakilketua': ('src/assets/wakilketua.webp', 0.15, 0.12, 0.85, 0.58),
    'bendahara1': ('src/assets/bendahara 1.webp', 0.15, 0.05, 0.85, 0.60),
    'bendahara2': ('src/assets/bendahara 2.webp', 0.15, 0.18, 0.85, 0.65),
    'sekretaris': ('src/assets/sektretaris.webp', 0.15, 0.12, 0.85, 0.60),
    'strategicnrelation': ('src/assets/strategicnrelation.webp', 0.15, 0.08, 0.85, 0.58),
    'humancapital': ('src/assets/humancapital.webp', 0.05, 0.05, 0.95, 0.95),
    'academic': ('src/assets/academic.webp', 0.05, 0.02, 0.95, 0.98),
    'mediacommunication': ('src/assets/mediacommunication.webp', 0.18, 0.10, 0.82, 0.56),
}

# Create unified background
y, x = np.ogrid[:TARGET_H, :TARGET_W]
cx, cy = TARGET_W / 2, TARGET_H * 0.35
dist = np.sqrt(((x - cx) / (TARGET_W * 0.75)) ** 2 + ((y - cy) / (TARGET_H * 0.65)) ** 2)
dist = np.clip(dist, 0, 1)

c_center = np.array([75, 95, 125])
c_edge = np.array([22, 32, 50])
bg_arr = (c_center * (1 - dist[:, :, None]) + c_edge * dist[:, :, None]).astype(np.uint8)
base_bg = Image.fromarray(bg_arr)

# Initialize rembg session
session = rembg.new_session()

for name, (path, x1_r, y1_r, x2_r, y2_r) in CROPS.items():
    print(f"Processing {name}...")
    orig = Image.open(path)
    w, h = orig.size
    
    crop_box = (int(w * x1_r), int(h * y1_r), int(w * x2_r), int(h * y2_r))
    cropped = orig.crop(crop_box)
    
    # Resize before rembg for speed and consistency
    max_dim = 1200
    if max(cropped.size) > max_dim:
        scale_down = max_dim / max(cropped.size)
        cropped = cropped.resize((int(cropped.width * scale_down), int(cropped.height * scale_down)), Image.Resampling.LANCZOS)
    
    # Remove background
    no_bg = rembg.remove(cropped, session=session)
    
    # Find bounding box of person in alpha channel
    alpha = np.array(no_bg.split()[-1])
    coords = np.argwhere(alpha > 10)
    if coords.size > 0:
        y_min, x_min = coords.min(axis=0)
        y_max, x_max = coords.max(axis=0)
        person = no_bg.crop((x_min, y_min, x_max + 1, y_max + 1))
    else:
        person = no_bg
    
    # Scale person so height fits nicely in target (leave ~40px headroom)
    target_person_h = int(TARGET_H * 0.92)
    p_w, p_h = person.size
    scale = target_person_h / p_h
    new_w, new_h = int(p_w * scale), int(p_h * scale)
    person_scaled = person.resize((new_w, new_h), Image.Resampling.LANCZOS)
    
    # Composite onto unified background
    card_img = base_bg.copy()
    pos_x = (TARGET_W - new_w) // 2
    pos_y = TARGET_H - new_h
    card_img.paste(person_scaled, (pos_x, pos_y), person_scaled)
    
    out_pub = f'public/assets/pengurus/{name}.webp'
    out_src = f'src/assets/pengurus/{name}.webp'
    card_img.save(out_pub, 'WEBP', quality=90)
    card_img.save(out_src, 'WEBP', quality=90)
    print(f"Saved {name} to {out_pub}")

print("All done!")
