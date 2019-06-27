import update from 'immutability-helper';

import unfold from 'helpers/immutability-helper/unfold';

export default ({ path, value }) => state => update(state, unfold(path, value));
