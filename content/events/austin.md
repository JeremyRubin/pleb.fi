---
location: austin
title: pleb.fi austin
url: /austin/
aliases: ["/Austin/"]
description: pleb.fi. austin event, the biggest fun you can imagine.
---

# [pleb.fi](/)
# [/austin](/austin)


##    in austin august 21st-22nd<br> (weekend before bitblockboom dallas)

## bring your pajamas
## (there's a hackathon)
### <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=i%20am%20a%20total%20pleb%20and%20i%20wanna%20go%20to&hashtags=bitcoin" data-size="large"> Tweet</a>

-----------------
### our lovely event sponsors 

{{< sponsors >}}




****************** ****************** ******************

# key dates

_see below for exact agenda._
- **sat 21st august day: workshops + talks**
- **sat 21st august evening: hackathon kickoff**
- **sunday 22nd august day: hackathon**
- **sunday 22nd august evening: hackathon demos**

## other fun around the event

pleb.fi is the 21st/22nd, but there's some other nearby bitcoin stuff

- thursday 19th august: [austin bitdevs](https://austinbitdevs.com/)
- friday 20th august: work at your pleb job
- thursday 26th august: [bit block boom](https://bitblockboom.com/)

## what is this "hackathon" you speak of

it is the friends you make on the journey. we will have a 24 hour
hackathon starting after the workshops (please sleep tho) for plebs to
build and showcase innovative ideas for the bitcoin ecosystem. don't
have any ideas or friends? the workshops on saturday will surely inspire.

there will be prizes. a bevy of them (subject to change till the event starts).

| prize | cash | other |
| --------- | ----- | -----|
| 1st | $5000 | fancy cowboy boots + limitd edition shirts |
| 2nd | $1000 | limited edition shirts |
| 3rd | $500  | limited edition shirts |
| DeFi|$250|
| Wallet|$250|
| Sapio|$250|
| New Layer 2s|$250|
| Lightning|$250|
| Self Sovereign|$250|
| Mining|$250|
| Design|$250|


## basic rules
no cheating allowed -- while it's OK if your submission is part of a larger
project or ecosystem (e.g., you are a c-lightning Dev and you build something
in c-lightning), the point is to try out new things and explore. there's no
[firm rule](https://en.wikipedia.org/wiki/I_know_it_when_I_see_it) here --
we'll know cheating when we see it, and disqualify at our discretion. when in
doubt, ask an organizer if your project is in the spirit of the event.

we love teams; but we also love to see lots of projects. to strike the right
balance, teams may have up to 3 attendees.

to make the event more inclusive, you can also have a 'remote only' +1
teammate, just let us know in advance who they are. in the spirit of getting
real remote participants, we encourage remotes to be e.g. 2 hours+ away from
austin (if you see them during the event in person it's a disqualifier).
interested in being a remote hacker? either ask your friends attending or [sign
up](https://forms.gle/pLbozeJTXuz6kpTdA) to share your info with teams.

we'll adjust these rules as the event draws near; ask any clarifying questions
in the telegram.

## why are you charging money? not cool.
organizing events is hard. charging admission serves a few purposes: 1) we want
to ensure that our limited space goes to people who want to be there, no
flakes; 2) we're going to ensure there's good food available throughout the
event. we're running the event as not-for-profit, any excess funds will go to
supporting our non-profit partner or future events. if paying for a ticket is
an obstacle for your attendance, please let us know by filling out [this
form](https://forms.gle/66mMcK2gbtftwCLr9) and we'll work something out.

************************ ************************ ************************ ************************

## the (not) secret pleb.fi agenda

_we may adjust this as we near the event..._

{{< schedule   >}}


### with love, the organizers:
{{< organizers   >}}

interested to sponsor the event or help organize? 
<a href="https://twitter.com/messages/compose?recipient_id=379400685" data-screen-name="@jeremyrubin">reach out!</a>






# Pre Event Resources:
Prep Reading: Looking to make the most of pleb.fi? Here's some recommended reading and software setup from some of our speakers...

## learn a little rust and get set up

https://www.rust-lang.org/learn as Sapio is in Rust -- a little bit / env setup will go a long way for following along!
### vscode

if you have an editor you like for rust already, ignore. in my experience, vscode is the easiest out of the box quick setup.


## sapio
Speaking of.. Sapio setup is here
https://learn.sapio-lang.org/ch01-01-installation.html and GUI is here
https://github.com/sapio-lang/sapio-studio.

Still doing a lot of changes before the workshop, but it's usable now. Make sure your environment is set up before you come so you have no problem using it.

## get bitcoind setup
Have bitcoin core compiled locally and ready to run in regtest https://github.com/bitcoin/bitcoin. you don't want build issues slowing you down, nor (if you want mainnet) do you want to have to sync on wifi with 100 other people.





## LSATS
LSATs, or Lightning Service Authentication Tokens, are a new way to do
pseudonymous authentication using the lightning network, leveraging the native
`402: Payment required` http error code, and macaroons. 

Learn more about LSATs and Macaroons:
- https://testnet-lsat-playground.vercel.app/ 
- https://medium.com/tierion/lsats-pseudonymous-authentication-using-bitcoin-lightning-payments-459e209b4b36 
- https://lsat.tech/
- https://docs.google.com/presentation/d/1QSm8tQs35-ZGf7a7a2pvFlSduH3mzvMgQaf-06Jjaow/edit#slide=id.p
- https://research.google/pubs/pub41892/

Libraries and code:
- https://github.com/lightninglabs/aperture
- https://github.com/Tierion/lsat-js
- https://github.com/tierion/boltwall

## read up on impervious
https://docs.impervious.ai

## read up on nomic's sidechain design
https://gist.github.com/mappum/da11e37f4e90891642a52621594d03f6