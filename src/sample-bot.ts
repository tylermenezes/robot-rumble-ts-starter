import { Action, ActionType, Direction } from './types';
import noop from './lib/noop';


function robot(state: any, unit: any): ActionType {
  noop();
  return Action.move(Direction.North);
}
