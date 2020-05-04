CREATE TABLE questions (
	id SERIAL PRIMARY KEY,
	question TEXT NOT NULL
);

CREATE TABLE responses (
	id SERIAL PRIMARY KEY,
	response TEXT NOT NULL,
	responderName VARCHAR(255) NOT NULL,
	question_id INTEGER REFERENCES questions(id)
);
