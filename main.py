import qrcode
from PIL import Image

img = qrcode.make("https://mathiasooi.github.io/")
img.save("qrcode.png")