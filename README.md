# URLMap
A safari extension for redirecting addresses using regex matching and replacement.

Use regex to match addresses, and then you can access the matched groups in the replacement using `<<1>>`, `<<2>>` etc.

Warning: I have barely tested this and it probably still has a couple of bugs!

## Example
I use this for automatically redirecting imgur .gif addresses to the corresponding .gifv address:

`(^https?:\/\/i\.imgur\.com\/[^.]*?\.gif)($|[^v].*?$)` -> `<<1>>v<<2>>`

This matches any imgur '.gif' url and adds a 'v' after the '.gif'.

## Download

[Here](https://github.com/sam-marsh/URLMap/raw/master/URLMap.safariextz).
