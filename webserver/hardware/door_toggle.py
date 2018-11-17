# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

import time
from .base import BaseDevice

class DoorToggle(BaseDevice):
    def open_door(self):
        self._device.on()
        time.sleep(3)
        self._device.off()
