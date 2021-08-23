export async function ipCommand(args: string[] = []) {
    const ip = Deno.run({ cmd: ["ip"].concat(args), stdout: "piped" })
    return new TextDecoder().decode(await ip.output())
}

export async function ipList() {
    const output = (await ipCommand(["address", "show"])).split(/(^|\n)[0-9]+:\s/g)
    const ipList: { name: string; ipv4: string; ipv6: string; }[] = []
    output.forEach((rawinfo) => {
        if (["", "\n"].includes(rawinfo)) return;
        ipList.push({
            name: rawinfo.split(/:\s/)[0],
            ipv4: (rawinfo.split(/\n\s+inet\s/)[1] || "").split(/\/[0-9]/)[0],
            ipv6: (rawinfo.split(/\n\s+inet6\s/)[1] || "").split(/\/[0-9]/)[0]
        })
    })
    return ipList
}

