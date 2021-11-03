import { Plateau } from './Plateau';
import { RoverLandingInput } from './RoverLandingInput';

export class LandingInput {
  plateau: Plateau;
  rovers: RoverLandingInput[];

  constructor(rovers: RoverLandingInput[], plateau: Plateau) {
    this.rovers = rovers;
    this.plateau = plateau;
  }
}
