alter table empresas modify cnpj varchar(20);


insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 165168166), 
    ('Vale', 61621615),
    ('Cielo', 5984500194);

desc empresas;
desc prefeitos;

select * from empresas;
select * from cidades;

insert into empresas_unidades
    (empresa_id, cidade_id, sede)
values
    (1,6,1),
    (1,5,0),
    (2,6,0),
    (2,5,1);
