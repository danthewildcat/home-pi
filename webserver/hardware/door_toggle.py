# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from time import sleep
from gpiozero import DigitalOutputDevice
from .base import BaseDevice

class DoorToggle(BaseDevice):
    device_class = DigitalOutputDevice

    def __init__(self, pin, active_high=False, **device_kwargs):
        super(DoorToggle, self).__init__(pin, active_high=active_high, **device_kwargs)

    def open_door(self):
        device = self._device
        # This 'while True' appears to make the system wait until the device is actually
        # ready, for whatever reason the on/off doesn't work without it
        while True:
            device.on()
            sleep(3)
            device.off()
            return
