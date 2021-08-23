# linux-ip
Deno.js package for the `ip` command on GNU/Linux

## Examples

* List all network interfaces info:
```ts
import { ipList } from "https://deno.land/x/linux_ip@v1.0.0/mod.ts";

console.log(await ipList())
```
Sample output:
```ts
[
  { name: "lo", ipv4: "127.0.0.1", ipv6: "::1" },
  { name: "enp2s0", ipv4: "", ipv6: "" },
  { name: "wlp3s0", ipv4: "192.168.1.108", ipv6: "fe80::1393:2a40:cb4b:31cf" }
]
```

* Run `ip` with custom args
```ts
import { ipCommand } from "https://deno.land/x/linux_ip@v1.0.0/master/mod.ts";

console.log(await ipCommand(["route","list"])) // Shows the routing table
```
