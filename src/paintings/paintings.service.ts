import { Injectable, NotFoundException } from '@nestjs/common';
import { Painting } from './paintings.entity';

@Injectable()
export class PaintingsService {
  private paintings: Painting[] = [
    {
      _id: 1,
      title: 'Titulo',
      description: 'Description',
    },
  ];

  getPaintings(): Painting[] {
    return this.paintings;
  }

  getPainting(id: number): Painting {
    return this.paintings.find((item) => item._id === id);
  }

  savePainting(painting: Painting): Painting {
    const newPainting = {
      ...painting,
      _id: this.getPaintings()[this.getPaintings().length - 1]._id + 1,
    };
    this.paintings.push(newPainting);
    return newPainting;
  }

  updatePainting(id: number, updateFields: any): Painting {
    const painting = this.getPainting(id);
    if (painting) {
      const newPainting = Object.assign(painting, updateFields);
      this.paintings = this.paintings.map((item) =>
        item._id === id ? newPainting : painting,
      );
      return newPainting;
    }
  }

  deletePainting(id: number): Painting {
    const index = this.paintings.findIndex((item) => item._id === id);
    if (index !== -1) {
      const deletedPainting = this.paintings.splice(index, 1)[0];
      return deletedPainting;
    }
    throw new NotFoundException(`Recurso con el ID ${id} no encontrado.`);
  }
}
