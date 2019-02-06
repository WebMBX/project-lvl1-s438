#!/usr/bin/env node
import { askName, gameQuestion, sayHi } from '..';

sayHi();
gameQuestion(1, askName());
