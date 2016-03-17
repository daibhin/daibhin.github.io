---
layout: post
title:  "Lessons in the Command Line"
date:   2016-01-17 16:19:29
---

> I recently spent some time becoming more familiar with the command line. Here are my notes:

<h4><b>General Commands</b></h4>
`Ctrl+A` __:__ Go to the beginning of the line

`Ctrl+E`  __:__ Go to the end of the line

`Ctrl+U` __:__ Deletes everything on a line before the cursor

`Ctrl+K` __:__ Deletes everything on a line after the cursor

`Ctrl+R` __:__ Recursive search

`!!` __:__ Execute previous command (Often used: sudo !!)

`![command]` __:__ Returns the last command which begins with the placeholder

`>` __:__ Write to file

`> >` __:__ Append to file

`head/tail` __:__ Show beginning or end of file

`wc` __:__ lines words bytes

`ps aux` __:__ List processes

`kill -15 [pid]` __:__ Kill the process with id 'pid'

`pwd` __:__ Print working directory (Current path)

`cd -`	__:__ Changes to previous directory

`&&` __:__ Runs next command only if the previous one succeeded

`;` __:__ Colon runs next command regardless of whether the previous one succeeded

`grep -ri` __:__ grep (search) recursively, case-insensitive

`ln` __:__ Link files (same file, different location)

<br/>

<h4><b>Less</b></h4>
`Ctrl+F` or `[spacebar]` __:__ move forward a page

`Ctrl+B` __:__ Move back a page

`[Arrow keys]` __:__ Move by line

`/[search term]` __:__ Find in file. Use ’n’ to go to cycle through found instances

`G` / `1G` __:__ Go to end/beginning of a file

<br/>

<h4><b>Ag</b></h4>
`-Q` __:__ Gets rid regex default

`-l` __:__ Only shows filename (Not line and line number)

`-i` __:__ Case insensitive search

`-G` __:__ Define filename/path name to search within

`--ignore-dir=railties/lib` or `--ignore-dir=“*.rb”` __:__ Exclude directories/file patterns from a search

`--skip-vcs-ignores` __:__ Returns results for files in .gitignore

<br/>

<h4><b>cURL</b></h4>
`-i` __:__ Return headers

`-o` __:__ Download file

`-X` __:__ Specify HTTP request type(GET, POST, PUT), passed as an argument

`-d` __:__ Adds params in quotations to request body. Can be specified as json, even from a file (using @[json_file_name].json)

`-F` __:__ Mimic form data

`-H` __:__ Define headers e.g “Accept: application/json”

`-u` __:__ HTTP authentication (pass “username:password”)

`-D` / `-b` __:__ Save returned cookies to file / Pass saved cookies file to server.

`-c` __:__ Can be used to store just the cookies (unlike -D where headers are also stored)

<br/>

<h4><b>find</b></h4>
`find [PATH_TO_SEARCH] [OPTIONS_TO_USE] [PATTERN_TO_SEARCH_FOR]`

* Place `\` before pattern wildcards(`.`,`*`) e.g `*` => `\*`

`-name` __:__ File names

`-path` __:__ Path name

`-type` __:__ `f` for file, `d` for directory

`-or` __:__ replaces implicit ‘AND’ searching with ‘OR’ searching. Use parenthesis (backslashed)  to control

`-not` or `\!` __:__ Not matching query

`-mtime` and `-mmin` __:__ Modified in the last `n` days or minutes (make sure numbers are negative)

`-size` __:__ Size greater than value in bytes. `k`, `M` and `G` can be substituted for kilo, mega and giga. Include `+` before number.

`-print -delete` __:__ Prints and deletes matching files. Usually appended to end of query

<br/>

<h4><b>grep</b></h4>
`grep [flags] [term] [filename and extension]` - regex by default, accepts multiple filenames

`-c` __:__ Counts instances

`-n` __:__ Shows line numbers

`-i` __:__ case insensitive

`-R` __:__ Recursive search through directories

`—include = “[pattern]”` __:__ Only searches files that match this pattern

`-v` __:__ Invert search

<br/>

<h4><b>ps</b></h4>
`PID` __:__ Process ID

`TIY` __:__ Controlling terminal

`TIME` __:__ Cumulative CPU time used by process since starting

`CMD` __:__ Name of running command

`u` __:__ Extra info columns

`-e` __:__ All processes

`-U` __:__ Get processes being run by a user e.g root

`-O` __:__ provide specific columns to show

`-m` __:__ Sort by memory

`-r` __:__ sort by CPU usage

<br/>

<h4><b>sed</b></h4>

`sed “[pattern] / s / [regex search] / [replacement] / [manipulation] / [flags] ” [source file]`

* Executes on each line in the source file

* __flags (optional) :__ `g` (global replace), `2` (second instance), `i` case insensitive, `p` (prints only modified content to the console), `w` (only writes modified content)

* __pattern (optional) :__ Only matches/manipulates lines which match this pattern

* __manipulation (optional) :__ `\u` (converts whatever comes after it to uppercase),
				`&` (represents to regex search),
				`\l` (lowercase)

`sed “ / [regex search] / d ”` __:__ delete matching line (does not alter file, only STDOUT)

`-i` __:__ Edit file in place (rather than sending output to STDOUT)
	adding `.tmp` saves second file with files original content
`-n` __:__ Suppress output

<br/>

<h4><b>sed</b> (Archiving)</h4>

`tar -c [files/directories]` (Can be multiple files/dirs, separated by a space)

`-c` __:__ create a new archive (Written to STDOUT)

`-f` __:__ Save to file. File must be passed as first parameter e.g foo.tar

`-v` __:__ Outputs archived files after creation

`-t` __:__ Print archived files

`-r` __:__ append files to an archive (not compatible with compressed archives)

`-u` __:__ Update file already in tar file (not compatible with compressed archives)

`-x` __:__ Extract files from archive

`-C [folder name]` __:__ State where the archive is to be extracted to

`-z` __:__ Compress archive. Convention: Add “.gz” to tar file name e.g foo.tar.gz

`-z` __:__ Uncompress archive

`-T` __:__ Read files/dirs from file

`-` __:__ Means the -T file is to be the piped in input

<br/>

<h4><b>Other Commands</b></h4>
`cal` (defaults to showing one month)

* `-y` __:__ year

* `[month] [year]` __:__ Both optional. Shows any year e.g 2016. Or any particular month in a given year

<br/>

`cat`

* `[No arguments]` __:__ Prints out contents or argument file

* `[file 1] [file 2]` __:__ Concatenates the two files

* `[file 1] [file 2] > [new file]` __:__ Saves concatenated output to new file

<br/>

`kill [process ID]` __:__ Peacefully shutdown when ready (despite command name)

* `-s SIGKILL` __:__ Forcefully kill a process

<br/>

`tail [file name]` __:__ Prints out last 10 lines

* `-n [number]` __:__ Prints out any amount of lines, starting from the end

* `-r` __:__ Reverse output order (Does not output top of file, just makes last line of the file the file line of the output)

* `-f` __:__ Live file output. Prints new file contents as it arrives

<br/>

`tree` __:__ Recursively lists directories and files. Can optionally pass directory (defaults to current directory)

* `-L [number]` __:__ Defines number of recursive levels

* `-d` __:__ Directories only

<br/>

`wc`

* `-w` __:__ Word count

* `-l` __:__ Line count
