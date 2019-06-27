import { memo } from 'react';

import render from './render';
import * as statics from './statics';

export default memo(Object.assign(render, statics));
