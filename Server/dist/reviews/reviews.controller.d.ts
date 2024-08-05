import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    create(createReviewDto: CreateReviewDto): Promise<import("./schemas/review.schema").Review>;
    findAll(): Promise<import("./schemas/review.schema").Review[]>;
    findOne(id: string): Promise<import("./schemas/review.schema").Review>;
    update(id: string, updateReviewDto: CreateReviewDto): Promise<import("./schemas/review.schema").Review>;
    remove(id: string): Promise<import("./schemas/review.schema").Review>;
}
