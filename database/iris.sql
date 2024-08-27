-- Create the Iris table
CREATE TABLE iris (
    id SERIAL PRIMARY KEY,
    sepal_length FLOAT,
    sepal_width FLOAT,
    petal_length FLOAT,
    petal_width FLOAT,
    species VARCHAR(20)
);

-- Insert the first four entries of the Iris dataset
INSERT INTO iris (sepal_length, sepal_width, petal_length, petal_width, species) VALUES
(5.1, 3.5, 1.4, 0.2, 'setosa'),
(4.9, 3.0, 1.4, 0.2, 'setosa'),
(4.7, 3.2, 1.3, 0.2, 'setosa'),
(4.6, 3.1, 1.5, 0.2, 'setosa');
