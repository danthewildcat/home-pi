# -*- coding: utf-8 -*-
from __future__ import absolute_import, unicode_literals

from hardware.door_toggle import DoorToggle

door_toggle = DoorToggle(17)
door_toggle.open_door()
door_toggle.close()
