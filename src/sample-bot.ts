import { Action, ActionType, Direction, State, Obj } from './types';
import noop from './lib/noop';


function robot(state: State, unit: Obj): ActionType {
  noop();
  return Action.move(Direction.North);
}
