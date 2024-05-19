import { Controller, Get, Query, ParseIntPipe, Logger, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import * as fs from 'fs';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('opportunities')
export class ScrapedOpportunityController {
  private readonly logger = new Logger(ScrapedOpportunityController.name);

  constructor() {}


  // @UseGuards(JwtAuthGuard)
  @Get('all')
  async getPaginatedScrapedOpportunities(
    @Query('page', ParseIntPipe) page: number = 1,
    @Query('pageSize', ParseIntPipe) pageSize: number = 10,
  ): Promise<any[]> {
    try {
      // Read data from the JSON file
      const rawData = fs.readFileSync('C:/Users/sn172/Desktop/Projects/GitHubProjects/KINECT--volunteer-matching-platform/backend/src/data/opportunity-scraped.json', 'utf-8');
      const scrapedOpportunities: any[] = JSON.parse(rawData);

      // Paginate the data
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedScrapedOpportunities = scrapedOpportunities.slice(startIndex, endIndex);

      // Log the directory name (optional)
      this.logger.log(__dirname);

      // Return the paginated data
      return paginatedScrapedOpportunities;
    } catch (error) {
      // Handle any errors, such as file reading error or JSON parsing error
      this.logger.error(`Error reading JSON file: ${error.message}`);
      throw new HttpException('Unable to retrieve opportunities', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // @UseGuards(JwtAuthGuard)
  @Get('count')
  getCountOfScrapedOpportunities(): number {
    try {
      // Read data from the JSON file
      const rawData = fs.readFileSync('C:/Users/sn172/Desktop/Projects/GitHubProjects/KINECT--volunteer-matching-platform/backend/src/data/opportunity-scraped.json', 'utf-8');
      const scrapedOpportunities: any[] = JSON.parse(rawData);

      // Return the number of entities
      return scrapedOpportunities.length;
    } catch (error) {
      // Handle any errors, such as file reading error or JSON parsing error
      this.logger.error(`Error reading JSON file: ${error.message}`);
      throw new HttpException('Unable to retrieve entity count', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
