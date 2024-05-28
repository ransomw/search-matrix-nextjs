#! /bin/sh

data_dir=pgdata
bin_dir=/usr/lib/postgresql/14/bin/

$bin_dir/initdb --locale=C.UTF-8 --encoding=UTF8 -D $data_dir
echo "unix_socket_directories = ''" >> $data_dir/postgresql.conf
