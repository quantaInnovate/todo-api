CREATE TABLE
    notes (
        id INT auto_increment PRIMARY key,
        title VARCHAR(255) NOT NULL,
        content VARCHAR(255) NOT NULL,
        tags VARCHAR(255) NULL,
        created_at datetime NULL,
        CONSTRAINT todo_id_uindex UNIQUE (id)
    );

