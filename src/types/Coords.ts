import Direction from './Direction';

export default class Coords {
  x: number;
  y: number;
  distanceTo(other: Coords) { return 0; }
  walkingDistanceTo(other: Coords) { return 0; }
  directionTo(other: Coords) { return new Direction(); }
  add(other: Coords) { return new Coords(); }
  sub(other: Coords) { return new Coords(); }
  mul(other: Coords) { return new Coords(); }
}
