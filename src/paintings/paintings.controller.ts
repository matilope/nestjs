import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { PaintingsService } from './paintings.service';
import { saveClassDto, updateClassDto } from './dto/painting.dto';
import { Painting } from './paintings.entity';

@Controller('paintings')
export class PaintingsController {
  constructor(private readonly paintingsService: PaintingsService) {}

  @Get()
  getPaintings(): Painting[] {
    return this.paintingsService.getPaintings();
  }

  @Get(':id')
  getPainting(@Param() id: any): Painting | object {
    const parsedId = parseInt(id.id);
    return this.paintingsService.getPainting(parsedId) || {};
  }

  @Post()
  savePainting(@Body() newPainting: saveClassDto): Painting {
    return this.paintingsService.savePainting({ ...newPainting });
  }

  @Patch(':id')
  updatePainting(
    @Param() id: any,
    @Body() updateFields: updateClassDto,
  ): Painting {
    const parsedId = parseInt(id.id);
    return this.paintingsService.updatePainting(parsedId, updateFields);
  }

  @Delete(':id')
  deletePainting(@Param() id: any): Painting {
    const parsedId = parseInt(id.id);
    return this.paintingsService.deletePainting(parsedId);
  }
}
