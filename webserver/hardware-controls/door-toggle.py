import time
from gpiozero import OutputDevice

with OutputDevice(2) as bz:
    bz.on()
    time.sleep(3)
    bz.off()
