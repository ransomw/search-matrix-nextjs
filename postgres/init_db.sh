#! /bin/sh

port=5433
bin_dir=/usr/lib/postgresql/14/bin/

$bin_dir/createuser -h localhost -p $port -s postgres

$bin_dir/createdb -h localhost -p $port -O postgres search-matrix


