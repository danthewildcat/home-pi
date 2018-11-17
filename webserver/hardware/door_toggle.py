# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from time import sleep
from gpiozero import DigitalOutputDevice
from .base import BaseDevice

class DoorToggle(BaseDevice):
    device_class = DigitalOutputDevice

    def open_door(self):
        device = self._device
        while True:
            device.on()
            sleep(3)
            device.off()
            return
