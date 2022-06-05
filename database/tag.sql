CREATE TABLE
    tags (
        id INT auto_increment PRIMARY key,
        name VARCHAR(255) NOT NULL,
        note_id VARCHAR(255) NULL,
        created_at datetime NULL,
        CONSTRAINT tag_id_uindex UNIQUE (id)
    );