import { RoverPosition } from './RoverPosition';

export class RoverLandingInput {
  initialPosition: RoverPosition;
  actions: string;

  constructor(initialPosition: RoverPosition, actions: string) {
    this.initialPosition = initialPosition;
    this.actions = actions;
  }
}
