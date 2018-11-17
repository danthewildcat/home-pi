# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from gpiozero import OutputDevice

class BaseDevice(object):
    device_class = OutputDevice

    def __init__(self, pin, **device_kwargs):
        self.pin = pin
        self.device_kwargs = device_kwargs

        if not self.device_class:
            raise Exception('Must define a device_class in the class definition!')

        self._device = self.device_class(pin, **self.device_kwargs)


    def close(self):
        self._device.close()
