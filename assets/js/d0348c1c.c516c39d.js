"use strict";(self.webpackChunktts_notes=self.webpackChunktts_notes||[]).push([[3980],{7994:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(5893),s=n(1151);const r={},o="PostgreSQL \u914d\u7f6e\u6587\u4ef6",i={id:"database/postgresql/postgres.conf",title:"PostgreSQL \u914d\u7f6e\u6587\u4ef6",description:"",source:"@site/docs/database/postgresql/postgres.conf.md",sourceDirName:"database/postgresql",slug:"/database/postgresql/postgres.conf",permalink:"/notes/database/postgresql/postgres.conf",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/notes/database/postgresql/commands"},next:{title:"PostgresSql Server Docker",permalink:"/notes/database/postgresql/postgres_server_docker"}},l={},c=[];function _(t){const e={code:"code",h1:"h1",pre:"pre",...(0,s.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"postgresql-\u914d\u7f6e\u6587\u4ef6",children:"PostgreSQL \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-conf",children:"# -----------------------------\n# PostgreSQL configuration file\n# -----------------------------\n#\n# This file consists of lines of the form:\n#\n#   name = value\n#\n# (The \"=\" is optional.)  Whitespace may be used.  Comments are introduced with\n# \"#\" anywhere on a line.  The complete list of parameter names and allowed\n# values can be found in the PostgreSQL documentation.\n#\n# The commented-out settings shown in this file represent the default values.\n# Re-commenting a setting is NOT sufficient to revert it to the default value;\n# you need to reload the server.\n#\n# This file is read on server startup and when the server receives a SIGHUP\n# signal.  If you edit the file on a running system, you have to SIGHUP the\n# server for the changes to take effect, run \"pg_ctl reload\", or execute\n# \"SELECT pg_reload_conf()\".  Some parameters, which are marked below,\n# require a server shutdown and restart to take effect.\n#\n# Any parameter can also be given as a command-line option to the server, e.g.,\n# \"postgres -c log_connections=on\".  Some parameters can be changed at run time\n# with the \"SET\" SQL command.\n#\n# Memory units:  B  = bytes            Time units:  us  = microseconds\n#                kB = kilobytes                     ms  = milliseconds\n#                MB = megabytes                     s   = seconds\n#                GB = gigabytes                     min = minutes\n#                TB = terabytes                     h   = hours\n#                                                   d   = days\n\n\n#------------------------------------------------------------------------------\n# FILE LOCATIONS\n#------------------------------------------------------------------------------\n\n# The default values of these variables are driven from the -D command-line\n# option or PGDATA environment variable, represented here as ConfigDir.\n\n#data_directory = 'ConfigDir'\t\t# use data in another directory\n\t\t\t\t\t# (change requires restart)\n#hba_file = 'ConfigDir/pg_hba.conf'\t# host-based authentication file\n\t\t\t\t\t# (change requires restart)\n#ident_file = 'ConfigDir/pg_ident.conf'\t# ident configuration file\n\t\t\t\t\t# (change requires restart)\n\n# If external_pid_file is not explicitly set, no extra PID file is written.\n#external_pid_file = ''\t\t\t# write an extra PID file\n\t\t\t\t\t# (change requires restart)\n\n\n#------------------------------------------------------------------------------\n# CONNECTIONS AND AUTHENTICATION\n#------------------------------------------------------------------------------\n\n# - Connection Settings -\n\nlisten_addresses = '*'\n\t\t\t\t\t# comma-separated list of addresses;\n\t\t\t\t\t# defaults to 'localhost'; use '*' for all\n\t\t\t\t\t# (change requires restart)\n#port = 5432\t\t\t\t# (change requires restart)\n#max_connections = 100\t\t\t# (change requires restart)\n#superuser_reserved_connections = 3\t# (change requires restart)\n#unix_socket_directories = '/tmp'\t# comma-separated list of directories\n\t\t\t\t\t# (change requires restart)\n#unix_socket_group = ''\t\t\t# (change requires restart)\n#unix_socket_permissions = 0777\t\t# begin with 0 to use octal notation\n\t\t\t\t\t# (change requires restart)\n#bonjour = off\t\t\t\t# advertise server via Bonjour\n\t\t\t\t\t# (change requires restart)\n#bonjour_name = ''\t\t\t# defaults to the computer name\n\t\t\t\t\t# (change requires restart)\n\n# - TCP settings -\n# see \"man tcp\" for details\n\n#tcp_keepalives_idle = 0\t\t# TCP_KEEPIDLE, in seconds;\n\t\t\t\t\t# 0 selects the system default\n#tcp_keepalives_interval = 0\t\t# TCP_KEEPINTVL, in seconds;\n\t\t\t\t\t# 0 selects the system default\n#tcp_keepalives_count = 0\t\t# TCP_KEEPCNT;\n\t\t\t\t\t# 0 selects the system default\n#tcp_user_timeout = 0\t\t\t# TCP_USER_TIMEOUT, in milliseconds;\n\t\t\t\t\t# 0 selects the system default\n\n#client_connection_check_interval = 0\t# time between checks for client\n\t\t\t\t\t# disconnection while running queries;\n\t\t\t\t\t# 0 for never\n\n# - Authentication -\n\n#authentication_timeout = 1min\t\t# 1s-600s\n#password_encryption = scram-sha-256\t# scram-sha-256 or md5\n#db_user_namespace = off\n\n# GSSAPI using Kerberos\n#krb_server_keyfile = 'FILE:${sysconfdir}/krb5.keytab'\n#krb_caseins_users = off\n\n# - SSL -\n\n#ssl = off\n#ssl_ca_file = ''\n#ssl_cert_file = 'server.crt'\n#ssl_crl_file = ''\n#ssl_crl_dir = ''\n#ssl_key_file = 'server.key'\n#ssl_ciphers = 'HIGH:MEDIUM:+3DES:!aNULL' # allowed SSL ciphers\n#ssl_prefer_server_ciphers = on\n#ssl_ecdh_curve = 'prime256v1'\n#ssl_min_protocol_version = 'TLSv1.2'\n#ssl_max_protocol_version = ''\n#ssl_dh_params_file = ''\n#ssl_passphrase_command = ''\n#ssl_passphrase_command_supports_reload = off\n\n\n#------------------------------------------------------------------------------\n# RESOURCE USAGE (except WAL)\n#------------------------------------------------------------------------------\n\n# - Memory -\n\n#shared_buffers = 32MB\t\t\t# min 128kB\n\t\t\t\t\t# (change requires restart)\n#huge_pages = try\t\t\t# on, off, or try\n\t\t\t\t\t# (change requires restart)\n#huge_page_size = 0\t\t\t# zero for system default\n\t\t\t\t\t# (change requires restart)\n#temp_buffers = 8MB\t\t\t# min 800kB\n#max_prepared_transactions = 0\t\t# zero disables the feature\n\t\t\t\t\t# (change requires restart)\n# Caution: it is not advisable to set max_prepared_transactions nonzero unless\n# you actively intend to use prepared transactions.\n#work_mem = 4MB\t\t\t\t# min 64kB\n#hash_mem_multiplier = 1.0\t\t# 1-1000.0 multiplier on hash table work_mem\n#maintenance_work_mem = 64MB\t\t# min 1MB\n#autovacuum_work_mem = -1\t\t# min 1MB, or -1 to use maintenance_work_mem\n#logical_decoding_work_mem = 64MB\t# min 64kB\n#max_stack_depth = 2MB\t\t\t# min 100kB\n#shared_memory_type = mmap\t\t# the default is the first option\n\t\t\t\t\t# supported by the operating system:\n\t\t\t\t\t#   mmap\n\t\t\t\t\t#   sysv\n\t\t\t\t\t#   windows\n\t\t\t\t\t# (change requires restart)\n#dynamic_shared_memory_type = posix\t# the default is the first option\n\t\t\t\t\t# supported by the operating system:\n\t\t\t\t\t#   posix\n\t\t\t\t\t#   sysv\n\t\t\t\t\t#   windows\n\t\t\t\t\t#   mmap\n\t\t\t\t\t# (change requires restart)\n#min_dynamic_shared_memory = 0MB\t# (change requires restart)\n\n# - Disk -\n\n#temp_file_limit = -1\t\t\t# limits per-process temp file space\n\t\t\t\t\t# in kilobytes, or -1 for no limit\n\n# - Kernel Resources -\n\n#max_files_per_process = 1000\t\t# min 64\n\t\t\t\t\t# (change requires restart)\n\n# - Cost-Based Vacuum Delay -\n\n#vacuum_cost_delay = 0\t\t\t# 0-100 milliseconds (0 disables)\n#vacuum_cost_page_hit = 1\t\t# 0-10000 credits\n#vacuum_cost_page_miss = 2\t\t# 0-10000 credits\n#vacuum_cost_page_dirty = 20\t\t# 0-10000 credits\n#vacuum_cost_limit = 200\t\t# 1-10000 credits\n\n# - Background Writer -\n\n#bgwriter_delay = 200ms\t\t\t# 10-10000ms between rounds\n#bgwriter_lru_maxpages = 100\t\t# max buffers written/round, 0 disables\n#bgwriter_lru_multiplier = 2.0\t\t# 0-10.0 multiplier on buffers scanned/round\n#bgwriter_flush_after = 0\t\t# measured in pages, 0 disables\n\n# - Asynchronous Behavior -\n\n#backend_flush_after = 0\t\t# measured in pages, 0 disables\n#effective_io_concurrency = 1\t\t# 1-1000; 0 disables prefetching\n#maintenance_io_concurrency = 10\t# 1-1000; 0 disables prefetching\n#max_worker_processes = 8\t\t# (change requires restart)\n#max_parallel_workers_per_gather = 2\t# taken from max_parallel_workers\n#max_parallel_maintenance_workers = 2\t# taken from max_parallel_workers\n#max_parallel_workers = 8\t\t# maximum number of max_worker_processes that\n\t\t\t\t\t# can be used in parallel operations\n#parallel_leader_participation = on\n#old_snapshot_threshold = -1\t\t# 1min-60d; -1 disables; 0 is immediate\n\t\t\t\t\t# (change requires restart)\n\n\n#------------------------------------------------------------------------------\n# WRITE-AHEAD LOG\n#------------------------------------------------------------------------------\n\n# - Settings -\n\n#wal_level = replica\t\t\t# minimal, replica, or logical\n\t\t\t\t\t# (change requires restart)\n#fsync = on\t\t\t\t# flush data to disk for crash safety\n\t\t\t\t\t# (turning this off can cause\n\t\t\t\t\t# unrecoverable data corruption)\n#synchronous_commit = on\t\t# synchronization level;\n\t\t\t\t\t# off, local, remote_write, remote_apply, or on\n#wal_sync_method = fsync\t\t# the default is the first option\n\t\t\t\t\t# supported by the operating system:\n\t\t\t\t\t#   open_datasync\n\t\t\t\t\t#   fdatasync (default on Linux and FreeBSD)\n\t\t\t\t\t#   fsync\n\t\t\t\t\t#   fsync_writethrough\n\t\t\t\t\t#   open_sync\n#full_page_writes = on\t\t\t# recover from partial page writes\n#wal_log_hints = off\t\t\t# also do full page writes of non-critical updates\n\t\t\t\t\t# (change requires restart)\n#wal_compression = off\t\t\t# enable compression of full-page writes\n#wal_init_zero = on\t\t\t# zero-fill new WAL files\n#wal_recycle = on\t\t\t# recycle WAL files\n#wal_buffers = -1\t\t\t# min 32kB, -1 sets based on shared_buffers\n\t\t\t\t\t# (change requires restart)\n#wal_writer_delay = 200ms\t\t# 1-10000 milliseconds\n#wal_writer_flush_after = 1MB\t\t# measured in pages, 0 disables\n#wal_skip_threshold = 2MB\n\n#commit_delay = 0\t\t\t# range 0-100000, in microseconds\n#commit_siblings = 5\t\t\t# range 1-1000\n\n# - Checkpoints -\n\n#checkpoint_timeout = 5min\t\t# range 30s-1d\n#checkpoint_completion_target = 0.9\t# checkpoint target duration, 0.0 - 1.0\n#checkpoint_flush_after = 0\t\t# measured in pages, 0 disables\n#checkpoint_warning = 30s\t\t# 0 disables\n#max_wal_size = 1GB\n#min_wal_size = 80MB\n\n# - Archiving -\n\n#archive_mode = off\t\t# enables archiving; off, on, or always\n\t\t\t\t# (change requires restart)\n#archive_command = ''\t\t# command to use to archive a logfile segment\n\t\t\t\t# placeholders: %p = path of file to archive\n\t\t\t\t#               %f = file name only\n\t\t\t\t# e.g. 'test ! -f /mnt/server/archivedir/%f && cp %p /mnt/server/archivedir/%f'\n#archive_timeout = 0\t\t# force a logfile segment switch after this\n\t\t\t\t# number of seconds; 0 disables\n\n# - Archive Recovery -\n\n# These are only used in recovery mode.\n\n#restore_command = ''\t\t# command to use to restore an archived logfile segment\n\t\t\t\t# placeholders: %p = path of file to restore\n\t\t\t\t#               %f = file name only\n\t\t\t\t# e.g. 'cp /mnt/server/archivedir/%f %p'\n#archive_cleanup_command = ''\t# command to execute at every restartpoint\n#recovery_end_command = ''\t# command to execute at completion of recovery\n\n# - Recovery Target -\n\n# Set these only when performing a targeted recovery.\n\n#recovery_target = ''\t\t# 'immediate' to end recovery as soon as a\n                                # consistent state is reached\n\t\t\t\t# (change requires restart)\n#recovery_target_name = ''\t# the named restore point to which recovery will proceed\n\t\t\t\t# (change requires restart)\n#recovery_target_time = ''\t# the time stamp up to which recovery will proceed\n\t\t\t\t# (change requires restart)\n#recovery_target_xid = ''\t# the transaction ID up to which recovery will proceed\n\t\t\t\t# (change requires restart)\n#recovery_target_lsn = ''\t# the WAL LSN up to which recovery will proceed\n\t\t\t\t# (change requires restart)\n#recovery_target_inclusive = on # Specifies whether to stop:\n\t\t\t\t# just after the specified recovery target (on)\n\t\t\t\t# just before the recovery target (off)\n\t\t\t\t# (change requires restart)\n#recovery_target_timeline = 'latest'\t# 'current', 'latest', or timeline ID\n\t\t\t\t# (change requires restart)\n#recovery_target_action = 'pause'\t# 'pause', 'promote', 'shutdown'\n\t\t\t\t# (change requires restart)\n\n\n#------------------------------------------------------------------------------\n# REPLICATION\n#------------------------------------------------------------------------------\n\n# - Sending Servers -\n\n# Set these on the primary and on any standby that will send replication data.\n\n#max_wal_senders = 10\t\t# max number of walsender processes\n\t\t\t\t# (change requires restart)\n#max_replication_slots = 10\t# max number of replication slots\n\t\t\t\t# (change requires restart)\n#wal_keep_size = 0\t\t# in megabytes; 0 disables\n#max_slot_wal_keep_size = -1\t# in megabytes; -1 disables\n#wal_sender_timeout = 60s\t# in milliseconds; 0 disables\n#track_commit_timestamp = off\t# collect timestamp of transaction commit\n\t\t\t\t# (change requires restart)\n\n# - Primary Server -\n\n# These settings are ignored on a standby server.\n\n#synchronous_standby_names = ''\t# standby servers that provide sync rep\n\t\t\t\t# method to choose sync standbys, number of sync standbys,\n\t\t\t\t# and comma-separated list of application_name\n\t\t\t\t# from standby(s); '*' = all\n#vacuum_defer_cleanup_age = 0\t# number of xacts by which cleanup is delayed\n\n# - Standby Servers -\n\n# These settings are ignored on a primary server.\n\n#primary_conninfo = ''\t\t\t# connection string to sending server\n#primary_slot_name = ''\t\t\t# replication slot on sending server\n#promote_trigger_file = ''\t\t# file name whose presence ends recovery\n#hot_standby = on\t\t\t# \"off\" disallows queries during recovery\n\t\t\t\t\t# (change requires restart)\n#max_standby_archive_delay = 30s\t# max delay before canceling queries\n\t\t\t\t\t# when reading WAL from archive;\n\t\t\t\t\t# -1 allows indefinite delay\n#max_standby_streaming_delay = 30s\t# max delay before canceling queries\n\t\t\t\t\t# when reading streaming WAL;\n\t\t\t\t\t# -1 allows indefinite delay\n#wal_receiver_create_temp_slot = off\t# create temp slot if primary_slot_name\n\t\t\t\t\t# is not set\n#wal_receiver_status_interval = 10s\t# send replies at least this often\n\t\t\t\t\t# 0 disables\n#hot_standby_feedback = off\t\t# send info from standby to prevent\n\t\t\t\t\t# query conflicts\n#wal_receiver_timeout = 60s\t\t# time that receiver waits for\n\t\t\t\t\t# communication from primary\n\t\t\t\t\t# in milliseconds; 0 disables\n#wal_retrieve_retry_interval = 5s\t# time to wait before retrying to\n\t\t\t\t\t# retrieve WAL after a failed attempt\n#recovery_min_apply_delay = 0\t\t# minimum delay for applying changes during recovery\n\n# - Subscribers -\n\n# These settings are ignored on a publisher.\n\n#max_logical_replication_workers = 4\t# taken from max_worker_processes\n\t\t\t\t\t# (change requires restart)\n#max_sync_workers_per_subscription = 2\t# taken from max_logical_replication_workers\n\n\n#------------------------------------------------------------------------------\n# QUERY TUNING\n#------------------------------------------------------------------------------\n\n# - Planner Method Configuration -\n\n#enable_async_append = on\n#enable_bitmapscan = on\n#enable_gathermerge = on\n#enable_hashagg = on\n#enable_hashjoin = on\n#enable_incremental_sort = on\n#enable_indexscan = on\n#enable_indexonlyscan = on\n#enable_material = on\n#enable_memoize = on\n#enable_mergejoin = on\n#enable_nestloop = on\n#enable_parallel_append = on\n#enable_parallel_hash = on\n#enable_partition_pruning = on\n#enable_partitionwise_join = off\n#enable_partitionwise_aggregate = off\n#enable_seqscan = on\n#enable_sort = on\n#enable_tidscan = on\n\n# - Planner Cost Constants -\n\n#seq_page_cost = 1.0\t\t\t# measured on an arbitrary scale\n#random_page_cost = 4.0\t\t\t# same scale as above\n#cpu_tuple_cost = 0.01\t\t\t# same scale as above\n#cpu_index_tuple_cost = 0.005\t\t# same scale as above\n#cpu_operator_cost = 0.0025\t\t# same scale as above\n#parallel_setup_cost = 1000.0\t# same scale as above\n#parallel_tuple_cost = 0.1\t\t# same scale as above\n#min_parallel_table_scan_size = 8MB\n#min_parallel_index_scan_size = 512kB\n#effective_cache_size = 4GB\n\n#jit_above_cost = 100000\t\t# perform JIT compilation if available\n\t\t\t\t\t# and query more expensive than this;\n\t\t\t\t\t# -1 disables\n#jit_inline_above_cost = 500000\t\t# inline small functions if query is\n\t\t\t\t\t# more expensive than this; -1 disables\n#jit_optimize_above_cost = 500000\t# use expensive JIT optimizations if\n\t\t\t\t\t# query is more expensive than this;\n\t\t\t\t\t# -1 disables\n\n# - Genetic Query Optimizer -\n\n#geqo = on\n#geqo_threshold = 12\n#geqo_effort = 5\t\t\t# range 1-10\n#geqo_pool_size = 0\t\t\t# selects default based on effort\n#geqo_generations = 0\t\t\t# selects default based on effort\n#geqo_selection_bias = 2.0\t\t# range 1.5-2.0\n#geqo_seed = 0.0\t\t\t# range 0.0-1.0\n\n# - Other Planner Options -\n\n#default_statistics_target = 100\t# range 1-10000\n#constraint_exclusion = partition\t# on, off, or partition\n#cursor_tuple_fraction = 0.1\t\t# range 0.0-1.0\n#from_collapse_limit = 8\n#jit = on\t\t\t\t# allow JIT compilation\n#join_collapse_limit = 8\t\t# 1 disables collapsing of explicit\n\t\t\t\t\t# JOIN clauses\n#plan_cache_mode = auto\t\t\t# auto, force_generic_plan or\n\t\t\t\t\t# force_custom_plan\n\n\n#------------------------------------------------------------------------------\n# REPORTING AND LOGGING\n#------------------------------------------------------------------------------\n\n# - Where to Log -\n\n#log_destination = 'stderr'\t\t# Valid values are combinations of\n\t\t\t\t\t# stderr, csvlog, syslog, and eventlog,\n\t\t\t\t\t# depending on platform.  csvlog\n\t\t\t\t\t# requires logging_collector to be on.\n\n# This is used when logging to stderr:\n#logging_collector = off\t\t# Enable capturing of stderr and csvlog\n\t\t\t\t\t# into log files. Required to be on for\n\t\t\t\t\t# csvlogs.\n\t\t\t\t\t# (change requires restart)\n\n# These are only used if logging_collector is on:\n#log_directory = 'log'\t\t\t# directory where log files are written,\n\t\t\t\t\t# can be absolute or relative to PGDATA\n#log_filename = 'postgresql-%Y-%m-%d_%H%M%S.log'\t# log file name pattern,\n\t\t\t\t\t# can include strftime() escapes\n#log_file_mode = 0600\t\t\t# creation mode for log files,\n\t\t\t\t\t# begin with 0 to use octal notation\n#log_rotation_age = 1d\t\t\t# Automatic rotation of logfiles will\n\t\t\t\t\t# happen after that time.  0 disables.\n#log_rotation_size = 10MB\t\t# Automatic rotation of logfiles will\n\t\t\t\t\t# happen after that much log output.\n\t\t\t\t\t# 0 disables.\n#log_truncate_on_rotation = off\t\t# If on, an existing log file with the\n\t\t\t\t\t# same name as the new log file will be\n\t\t\t\t\t# truncated rather than appended to.\n\t\t\t\t\t# But such truncation only occurs on\n\t\t\t\t\t# time-driven rotation, not on restarts\n\t\t\t\t\t# or size-driven rotation.  Default is\n\t\t\t\t\t# off, meaning append to existing files\n\t\t\t\t\t# in all cases.\n\n# These are relevant when logging to syslog:\n#syslog_facility = 'LOCAL0'\n#syslog_ident = 'postgres'\n#syslog_sequence_numbers = on\n#syslog_split_messages = on\n\n# This is only relevant when logging to eventlog (Windows):\n# (change requires restart)\n#event_source = 'PostgreSQL'\n\n# - When to Log -\n\n#log_min_messages = warning\t\t# values in order of decreasing detail:\n\t\t\t\t\t#   debug5\n\t\t\t\t\t#   debug4\n\t\t\t\t\t#   debug3\n\t\t\t\t\t#   debug2\n\t\t\t\t\t#   debug1\n\t\t\t\t\t#   info\n\t\t\t\t\t#   notice\n\t\t\t\t\t#   warning\n\t\t\t\t\t#   error\n\t\t\t\t\t#   log\n\t\t\t\t\t#   fatal\n\t\t\t\t\t#   panic\n\n#log_min_error_statement = error\t# values in order of decreasing detail:\n\t\t\t\t\t#   debug5\n\t\t\t\t\t#   debug4\n\t\t\t\t\t#   debug3\n\t\t\t\t\t#   debug2\n\t\t\t\t\t#   debug1\n\t\t\t\t\t#   info\n\t\t\t\t\t#   notice\n\t\t\t\t\t#   warning\n\t\t\t\t\t#   error\n\t\t\t\t\t#   log\n\t\t\t\t\t#   fatal\n\t\t\t\t\t#   panic (effectively off)\n\n#log_min_duration_statement = -1\t# -1 is disabled, 0 logs all statements\n\t\t\t\t\t# and their durations, > 0 logs only\n\t\t\t\t\t# statements running at least this number\n\t\t\t\t\t# of milliseconds\n\n#log_min_duration_sample = -1\t\t# -1 is disabled, 0 logs a sample of statements\n\t\t\t\t\t# and their durations, > 0 logs only a sample of\n\t\t\t\t\t# statements running at least this number\n\t\t\t\t\t# of milliseconds;\n\t\t\t\t\t# sample fraction is determined by log_statement_sample_rate\n\n#log_statement_sample_rate = 1.0\t# fraction of logged statements exceeding\n\t\t\t\t\t# log_min_duration_sample to be logged;\n\t\t\t\t\t# 1.0 logs all such statements, 0.0 never logs\n\n\n#log_transaction_sample_rate = 0.0\t# fraction of transactions whose statements\n\t\t\t\t\t# are logged regardless of their duration; 1.0 logs all\n\t\t\t\t\t# statements from all transactions, 0.0 never logs\n\n# - What to Log -\n\n#debug_print_parse = off\n#debug_print_rewritten = off\n#debug_print_plan = off\n#debug_pretty_print = on\n#log_autovacuum_min_duration = -1\t# log autovacuum activity;\n\t\t\t\t\t# -1 disables, 0 logs all actions and\n\t\t\t\t\t# their durations, > 0 logs only\n\t\t\t\t\t# actions running at least this number\n\t\t\t\t\t# of milliseconds.\n#log_checkpoints = off\n#log_connections = off\n#log_disconnections = off\n#log_duration = off\n#log_error_verbosity = default\t\t# terse, default, or verbose messages\n#log_hostname = off\n#log_line_prefix = '%m [%p] '\t\t# special values:\n\t\t\t\t\t#   %a = application name\n\t\t\t\t\t#   %u = user name\n\t\t\t\t\t#   %d = database name\n\t\t\t\t\t#   %r = remote host and port\n\t\t\t\t\t#   %h = remote host\n\t\t\t\t\t#   %b = backend type\n\t\t\t\t\t#   %p = process ID\n\t\t\t\t\t#   %P = process ID of parallel group leader\n\t\t\t\t\t#   %t = timestamp without milliseconds\n\t\t\t\t\t#   %m = timestamp with milliseconds\n\t\t\t\t\t#   %n = timestamp with milliseconds (as a Unix epoch)\n\t\t\t\t\t#   %Q = query ID (0 if none or not computed)\n\t\t\t\t\t#   %i = command tag\n\t\t\t\t\t#   %e = SQL state\n\t\t\t\t\t#   %c = session ID\n\t\t\t\t\t#   %l = session line number\n\t\t\t\t\t#   %s = session start timestamp\n\t\t\t\t\t#   %v = virtual transaction ID\n\t\t\t\t\t#   %x = transaction ID (0 if none)\n\t\t\t\t\t#   %q = stop here in non-session\n\t\t\t\t\t#        processes\n\t\t\t\t\t#   %% = '%'\n\t\t\t\t\t# e.g. '<%u%%%d> '\n#log_lock_waits = off\t\t\t# log lock waits >= deadlock_timeout\n#log_recovery_conflict_waits = off\t# log standby recovery conflict waits\n\t\t\t\t\t# >= deadlock_timeout\n#log_parameter_max_length = -1\t\t# when logging statements, limit logged\n\t\t\t\t\t# bind-parameter values to N bytes;\n\t\t\t\t\t# -1 means print in full, 0 disables\n#log_parameter_max_length_on_error = 0\t# when logging an error, limit logged\n\t\t\t\t\t# bind-parameter values to N bytes;\n\t\t\t\t\t# -1 means print in full, 0 disables\n#log_statement = 'none'\t\t\t# none, ddl, mod, all\n#log_replication_commands = off\n#log_temp_files = -1\t\t\t# log temporary files equal or larger\n\t\t\t\t\t# than the specified size in kilobytes;\n\t\t\t\t\t# -1 disables, 0 logs all temp files\n#log_timezone = 'GMT'\n\n\n#------------------------------------------------------------------------------\n# PROCESS TITLE\n#------------------------------------------------------------------------------\n\n#cluster_name = ''\t\t\t# added to process titles if nonempty\n\t\t\t\t\t# (change requires restart)\n#update_process_title = on\n\n\n#------------------------------------------------------------------------------\n# STATISTICS\n#------------------------------------------------------------------------------\n\n# - Query and Index Statistics Collector -\n\n#track_activities = on\n#track_activity_query_size = 1024\t# (change requires restart)\n#track_counts = on\n#track_io_timing = off\n#track_wal_io_timing = off\n#track_functions = none\t\t\t# none, pl, all\n#stats_temp_directory = 'pg_stat_tmp'\n\n\n# - Monitoring -\n\n#compute_query_id = auto\n#log_statement_stats = off\n#log_parser_stats = off\n#log_planner_stats = off\n#log_executor_stats = off\n\n\n#------------------------------------------------------------------------------\n# AUTOVACUUM\n#------------------------------------------------------------------------------\n\n#autovacuum = on\t\t\t# Enable autovacuum subprocess?  'on'\n\t\t\t\t\t# requires track_counts to also be on.\n#autovacuum_max_workers = 3\t\t# max number of autovacuum subprocesses\n\t\t\t\t\t# (change requires restart)\n#autovacuum_naptime = 1min\t\t# time between autovacuum runs\n#autovacuum_vacuum_threshold = 50\t# min number of row updates before\n\t\t\t\t\t# vacuum\n#autovacuum_vacuum_insert_threshold = 1000\t# min number of row inserts\n\t\t\t\t\t# before vacuum; -1 disables insert\n\t\t\t\t\t# vacuums\n#autovacuum_analyze_threshold = 50\t# min number of row updates before\n\t\t\t\t\t# analyze\n#autovacuum_vacuum_scale_factor = 0.2\t# fraction of table size before vacuum\n#autovacuum_vacuum_insert_scale_factor = 0.2\t# fraction of inserts over table\n\t\t\t\t\t# size before insert vacuum\n#autovacuum_analyze_scale_factor = 0.1\t# fraction of table size before analyze\n#autovacuum_freeze_max_age = 200000000\t# maximum XID age before forced vacuum\n\t\t\t\t\t# (change requires restart)\n#autovacuum_multixact_freeze_max_age = 400000000\t# maximum multixact age\n\t\t\t\t\t# before forced vacuum\n\t\t\t\t\t# (change requires restart)\n#autovacuum_vacuum_cost_delay = 2ms\t# default vacuum cost delay for\n\t\t\t\t\t# autovacuum, in milliseconds;\n\t\t\t\t\t# -1 means use vacuum_cost_delay\n#autovacuum_vacuum_cost_limit = -1\t# default vacuum cost limit for\n\t\t\t\t\t# autovacuum, -1 means use\n\t\t\t\t\t# vacuum_cost_limit\n\n\n#------------------------------------------------------------------------------\n# CLIENT CONNECTION DEFAULTS\n#------------------------------------------------------------------------------\n\n# - Statement Behavior -\n\n#client_min_messages = notice\t\t# values in order of decreasing detail:\n\t\t\t\t\t#   debug5\n\t\t\t\t\t#   debug4\n\t\t\t\t\t#   debug3\n\t\t\t\t\t#   debug2\n\t\t\t\t\t#   debug1\n\t\t\t\t\t#   log\n\t\t\t\t\t#   notice\n\t\t\t\t\t#   warning\n\t\t\t\t\t#   error\n#search_path = '\"$user\", public'\t# schema names\n#row_security = on\n#default_table_access_method = 'heap'\n#default_tablespace = ''\t\t# a tablespace name, '' uses the default\n#default_toast_compression = 'pglz'\t# 'pglz' or 'lz4'\n#temp_tablespaces = ''\t\t\t# a list of tablespace names, '' uses\n\t\t\t\t\t# only default tablespace\n#check_function_bodies = on\n#default_transaction_isolation = 'read committed'\n#default_transaction_read_only = off\n#default_transaction_deferrable = off\n#session_replication_role = 'origin'\n#statement_timeout = 0\t\t\t# in milliseconds, 0 is disabled\n#lock_timeout = 0\t\t\t# in milliseconds, 0 is disabled\n#idle_in_transaction_session_timeout = 0\t# in milliseconds, 0 is disabled\n#idle_session_timeout = 0\t\t# in milliseconds, 0 is disabled\n#vacuum_freeze_table_age = 150000000\n#vacuum_freeze_min_age = 50000000\n#vacuum_failsafe_age = 1600000000\n#vacuum_multixact_freeze_table_age = 150000000\n#vacuum_multixact_freeze_min_age = 5000000\n#vacuum_multixact_failsafe_age = 1600000000\n#bytea_output = 'hex'\t\t\t# hex, escape\n#xmlbinary = 'base64'\n#xmloption = 'content'\n#gin_pending_list_limit = 4MB\n\n# - Locale and Formatting -\n\n#datestyle = 'iso, mdy'\n#intervalstyle = 'postgres'\n#timezone = 'GMT'\n#timezone_abbreviations = 'Default'     # Select the set of available time zone\n\t\t\t\t\t# abbreviations.  Currently, there are\n\t\t\t\t\t#   Default\n\t\t\t\t\t#   Australia (historical usage)\n\t\t\t\t\t#   India\n\t\t\t\t\t# You can create your own file in\n\t\t\t\t\t# share/timezonesets/.\n#extra_float_digits = 1\t\t\t# min -15, max 3; any value >0 actually\n\t\t\t\t\t# selects precise output mode\n#client_encoding = sql_ascii\t\t# actually, defaults to database\n\t\t\t\t\t# encoding\n\n# These settings are initialized by initdb, but they can be changed.\n#lc_messages = 'C'\t\t\t# locale for system error message\n\t\t\t\t\t# strings\n#lc_monetary = 'C'\t\t\t# locale for monetary formatting\n#lc_numeric = 'C'\t\t\t# locale for number formatting\n#lc_time = 'C'\t\t\t\t# locale for time formatting\n\n# default configuration for text search\n#default_text_search_config = 'pg_catalog.simple'\n\n# - Shared Library Preloading -\n\n#local_preload_libraries = ''\n#session_preload_libraries = ''\n#shared_preload_libraries = ''\t# (change requires restart)\n#jit_provider = 'llvmjit'\t\t# JIT library to use\n\n# - Other Defaults -\n\n#dynamic_library_path = '$libdir'\n#gin_fuzzy_search_limit = 0\n\n\n#------------------------------------------------------------------------------\n# LOCK MANAGEMENT\n#------------------------------------------------------------------------------\n\n#deadlock_timeout = 1s\n#max_locks_per_transaction = 64\t\t# min 10\n\t\t\t\t\t# (change requires restart)\n#max_pred_locks_per_transaction = 64\t# min 10\n\t\t\t\t\t# (change requires restart)\n#max_pred_locks_per_relation = -2\t# negative values mean\n\t\t\t\t\t# (max_pred_locks_per_transaction\n\t\t\t\t\t#  / -max_pred_locks_per_relation) - 1\n#max_pred_locks_per_page = 2            # min 0\n\n\n#------------------------------------------------------------------------------\n# VERSION AND PLATFORM COMPATIBILITY\n#------------------------------------------------------------------------------\n\n# - Previous PostgreSQL Versions -\n\n#array_nulls = on\n#backslash_quote = safe_encoding\t# on, off, or safe_encoding\n#escape_string_warning = on\n#lo_compat_privileges = off\n#quote_all_identifiers = off\n#standard_conforming_strings = on\n#synchronize_seqscans = on\n\n# - Other Platforms and Clients -\n\n#transform_null_equals = off\n\n\n#------------------------------------------------------------------------------\n# ERROR HANDLING\n#------------------------------------------------------------------------------\n\n#exit_on_error = off\t\t\t# terminate session on any error?\n#restart_after_crash = on\t\t# reinitialize after backend crash?\n#data_sync_retry = off\t\t\t# retry or panic on failure to fsync\n\t\t\t\t\t# data?\n\t\t\t\t\t# (change requires restart)\n#recovery_init_sync_method = fsync\t# fsync, syncfs (Linux 5.8+)\n\n\n#------------------------------------------------------------------------------\n# CONFIG FILE INCLUDES\n#------------------------------------------------------------------------------\n\n# These options allow settings to be loaded from files other than the\n# default postgresql.conf.  Note that these are directives, not variable\n# assignments, so they can usefully be given more than once.\n\n#include_dir = '...'\t\t\t# include files ending in '.conf' from\n\t\t\t\t\t# a directory, e.g., 'conf.d'\n#include_if_exists = '...'\t\t# include file only if it exists\n#include = '...'\t\t\t# include file\n\n\n#------------------------------------------------------------------------------\n# CUSTOMIZED OPTIONS\n#------------------------------------------------------------------------------\n\n# Add settings for extensions here\n"})})]})}function m(t={}){const{wrapper:e}={...(0,s.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(_,{...t})}):_(t)}},1151:(t,e,n)=>{n.d(e,{Z:()=>i,a:()=>o});var a=n(7294);const s={},r=a.createContext(s);function o(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:o(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);