// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map((element) => {
        return element.director
    })

    return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const filterStevenSpielberg = moviesArray.filter((element) => {
        return element.director === "Steven Spielberg" && element.genre.includes ("Drama")
    })
    return filterStevenSpielberg.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
        return 0;
    }
    const reduceAllScores = moviesArray.reduce ((accumulator, element) => {
        if (element.score === undefined) {
            return accumulator;
        } else {
            return element.score + accumulator;
        }
    }, 0);

    const averageScores = reduceAllScores / moviesArray.length;

    return parseFloat(averageScores.toFixed(2))
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const filterDramaMovies = moviesArray.filter((element) => {
        return element.genre.includes ("Drama");
    })

    if (filterDramaMovies.length === 0) {
        return 0;
    }

    const averageDramaMovies = filterDramaMovies.reduce ((accumulator, element) => {
        if (element.score === undefined) {
            return accumulator;
        } else {
            return element.score + accumulator;
        }
    }, 0);

    const averageDramaScore = averageDramaMovies / filterDramaMovies.length;

    return parseFloat(averageDramaScore.toFixed(2))

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
   const moviesByYear = moviesArray.sort((elementA, elementB) => elementA.year - elementB.year);
    
   const moviesSort = moviesByYear.sort((a,b) => {
    const title1 = a.title;
    const title2 = b.title;
    if (a.year === b.year) {
        if(title1 < title2) {
            return -1;
        } else if (title1 > title2) {
            return 1;
        } else {
            return 0;
        }
    }
   });
    return Array.from(moviesSort)
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const orderByTitle = moviesArray.map((element) => {
        return element.title
    })

    orderByTitle.sort();
    if (orderByTitle.length > 20) {
        return orderByTitle.slice(0, 20)
    }
    return orderByTitle
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    const orderByTime = moviesArray.map((element) => {
        return element.duration
    })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if (moviesArray.length === 0) {
        return null
    }

}
