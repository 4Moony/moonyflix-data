import { Movie } from '@moony/moonyflix-core/dist/src/model/movie'
import { IMovieService } from '@moony/moonyflix-core/dist/src/contracts/services/movie.service'

export class MovieService implements IMovieService {
  getMovies(): Promise<Movie[]> {
    return Promise.resolve([])
  }
}
