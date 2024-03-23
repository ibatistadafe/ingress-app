
  export class  Events {
    id: number;
    image: string;
    description: string;
    value: string;
    status: string;
  
    constructor(id: number, image: string, description: string, value: string, status: string) {
      this.id = id;
      this.image = image;
      this.description = description;
      this.value = value;
      this.status = status;
    }
  }