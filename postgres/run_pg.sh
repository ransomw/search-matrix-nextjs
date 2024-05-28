#! /bin/sh

port=5433
data_dir=pgdata
bin_dir=/usr/lib/postgresql/14/bin/

$bin_dir/postgres -p $port -D $data_dir &
pg_pid=$!

echo
echo "postgres pid ${pg_pid}"
echo


