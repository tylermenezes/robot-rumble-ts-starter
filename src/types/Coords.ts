import Direction from './Direction';

export default class Coords {
  x: number;
  y: number;
  distanceTo(other: Coords) { return 0; }
  walkingDistanceTo(other: Coords) { return 0; }
  directionTo(other: Coords) { return new Direction(); }
  add(other: Coords | Direction) { return new Coords(); }
  sub(other: Coords | Direction) { return new Coords(); }
  mul(other: Coords | Direction) { return new Coords(); }
}
