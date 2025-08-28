## Exercise 1 — Tasks

- Find the title of each film
  ```sql
  SELECT title FROM movies;
  ```
- Find the director of each film
  ```sql
  SELECT director FROM movies;
  ```
- Find the title and director of each film
  ```sql
  SELECT title,director FROM movies;
  ```
- Find the title and year of each film
  ```sql
  SELECT title,year FROM movies;
  ```
- Find all the information about each film
  ```sql
  SELECT * FROM movies;
  ```

## Exercise 2 — Tasks

- Find the movie with a row id of 6 ✓
  ```sql
  SELECT *
  FROM movies
  where id=6;
  ```
- Find the movies released in the years between 2000 and 2010
  ```sql
  SELECT *
  FROM movies
  where year BETWEEN 2000 AND 2010;
  ```
- Find the movies not released in the years between 2000 and 2010
  ```sql
  SELECT *
  FROM movies
  where year NOT BETWEEN 2000 AND 2010;
  ```
- Find the first 5 Pixar movies and their release year
  ```sql
  SELECT *
  FROM movies
  where id BETWEEN 1 AND 5;
  ```

## Exercise 3 — Tasks

- Find all the Toy Story movies
  ```sql
  SELECT *
  FROM movies
  where title like 'toy story%';
  ```
- Find all the movies directed by John Lasseter
  ```sql
  SELECT *
  FROM movies
  where director like 'John Lasseter';
  ```
- Find all the movies (and director) not directed by John Lasseter
  ```sql
  SELECT *
  FROM movies
  where director not like 'John Lasseter';
  ```
- Find all the WALL-\* movies
  ```sql
  SELECT *
  FROM movies
  where title like 'WALL-_';
  ```

## Exercise 4 — Tasks

- List all directors of Pixar movies (alphabetically), without duplicates
  ```sql
  SELECT DISTINCT director
  FROM movies
  order by director;
  ```
- List the last four Pixar movies released (ordered from most recent to least)
  ```sql
  SELECT DISTINCT *
  FROM movies
  order by year DESC
  limit 4 ;
  ```
- List the first five Pixar movies sorted alphabetically
  ```sql
  SELECT DISTINCT *
  FROM movies
  order by title
  limit 5;
  ```
- List the next five Pixar movies sorted alphabetically
  ```sql
  SELECT DISTINCT *
  FROM movies
  order by title
  limit 5 offset 5;
  ```

## Review 1 — Tasks

- List all the Canadian cities and their populations ✓
  ```sql
  SELECT *
  FROM north_american_cities
  where country like 'canada';
  ```
- Order all the cities in the United States by their latitude from north to south
  ```sql
  SELECT *
  FROM north_american_cities
  where country like 'United States'
  order by latitude DESC;
  ```
- List all the cities west of Chicago, ordered from west to east
  ```sql
  SELECT *
  FROM north_american_cities
  where longitude<(select longitude
                  from north_american_cities
                  where city='Chicago')
  order by longitude;
  ```
- List the two largest cities in Mexico (by population)
  ```sql
  SELECT *
  FROM north_american_cities
  where country='Mexico'
  order by population desc
  limit 2;
  ```
- List the third and fourth largest cities (by population) in the United States and their population
  ```sql
  SELECT *
  FROM north_american_cities
  where country='United States'
  order by population desc
  limit 2 offset 2;
  ```

#

## Normalisation (spilte the table) - to avoid Anomalies(when uptade/delete)

- Associationn table (mapping / injunction table) to join the splited table
- towcolum=primary key (compunt primary key)

## Exercise 6 — Tasks

- Find the domestic and international sales for each movie
  ```sql
  SELECT *
  FROM movies
  inner join boxoffice
  on movies.id=boxoffice.movie_id
  ```
- Show the sales numbers for each movie that did better internationally rather than domestically
  ```sql
  SELECT *
  FROM movies
  inner join boxoffice
  on movies.id=boxoffice.movie_id
  where domestic_sales <international_sales
  ```
- List all the movies by their ratings in descending order
  ```sql
  SELECT *
  FROM movies
  inner join boxoffice
  on movies.id=boxoffice.movie_id
  order by rating desc
  ```

## Exercise 7 — Tasks

- Find the list of all buildings that have employees ✓
  ```sql
  SELECT distinct building
  FROM employees
  ```
- Find the list of all buildings and their capacity
  ```sql
  SELECT*
  FROM buildings;
  ```
- List all buildings and the distinct employee roles in each building (including empty buildings)
  ```sql
  SELECT distinct building_name,role
  FROM buildings
  left join employees
  on building_name=building
  ```

## Exercise 8 — Tasks

- Find the name and role of all employees who have not been assigned to a building ✓
  ```sql
  SELECT name,role
  FROM employees
  where building is null
  ```
- Find the names of the buildings that hold no employees ✓
  ```sql
  SELECT building_name
  FROM buildings
  left join employees
  on building_name=building
  where name is null
  ```

## Exercise 9 — Tasks

- List all movies and their combined sales in millions of dollars
  ```sql
  SELECT title, (domestic_sales + international_sales) / 1000000 as millions
  FROM movies
  inner join boxoffice
  on id=movie_id
  ```
- List all movies and their ratings in percent
  ```sql
  SELECT title, round((rating/10)*100) as rating_percent
  FROM movies
  inner join boxoffice
  on id=movie_id
  ```
- List all movies that were released on even number years
  ```sql
  SELECT title
  FROM movies
  inner join boxoffice
  on id=movie_id
  where year % 2=0
  ```

## Exercise 10 — Tasks

- Find the longest time that an employee has been at the studio
  ```sql
  SELECT name,max(years_employed)
  FROM employees;
  ```
- For each role, find the average number of years employed by employees in that role
  ```sql
  SELECT role, AVG(years_employed)
  FROM employees
  group by role
  ```
- Find the total number of employee years worked in each building
  ```sql
  SELECT building,sum(years_employed)
  FROM employees
  group by building
  ```

## Exercise 11 — Tasks

- Find the number of Artists in the studio (without a HAVING clause)
  ```sql
  SELECT role,count(name)
  FROM employees
  where role='Artist'
  ```
- Find the number of Employees of each role in the studio
  ```sql
  SELECT role,count(name)
  FROM employees
  group by role
  ```
- Find the total number of years employed by all Engineers
  ```sql
  SELECT role,sum(years_employed)
  FROM employees
  where role='Engineer'
  ```

## Exercise 12 — Tasks

- Find the number of movies each director has directed
  ```sql
  SELECT director,count(title)
  FROM movies
  group by director
  ```
- Find the total domestic and international sales that can be attributed to each director
  ```sql
  SELECT movies.director,
      sum(boxoffice.domestic_sales+boxoffice.international_sales)as total_sales
  FROM movies
  inner join boxoffice
  on movies.id=boxoffice.movie_id
  group by movies.director
  ```

# DML & DDL
