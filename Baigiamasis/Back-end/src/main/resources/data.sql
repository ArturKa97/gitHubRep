INSERT INTO nutrition_user (id ,email, password)
VALUES
    -- user@email.com:user -- USER
    (1, 'user@email.com', 'user'),

    -- admin@admin.com:admin -- USER, ADMIN
    (2, 'admin@admin.com', 'admin');

INSERT INTO role (role)
VALUES
    ('USER'),
    ('ADMIN');

INSERT INTO nutrition_user_roles (user_id, roles_role)
VALUES
    (1, 'USER'),
    (2, 'USER'),
    (2, 'ADMIN');