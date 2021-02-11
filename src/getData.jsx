let f = (p) => p.innerText.split(" ").reverse()[0],
    cols = document.querySelectorAll(".player-stats-igs .col-lg-2"),
    o = {},
    arr = [],
    u = (url) => url.toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g,'')
        .replace(/\s+/g,'-')
        .replace(/\ı+/g,'i')
        .toLowerCase()
        .replace(/&/g,'-and-')
        .replace(/[^a-z0-9\-]/g,'')
        .replace(/-+/g,'-')
        .replace(/^-*/,'')
        .replace(/-*$/,'');
  
document.getElementById("info-tab").querySelectorAll(".player-sidebar-item").forEach(e => {
  arr.push(e.querySelectorAll(".player-sidebar-value")[0].innerText)
})

{
  "id": location.pathname.split("/")[3] * 1,
  "fullname": document.querySelectorAll(".breadcrumb div:last-child")[0].innerText,
  "name": u(document.querySelectorAll(".breadcrumb div:last-child")[0].innerText),
  "birthday": arr[6].split(" - ")[1],
  "height": arr[7].split(" | ")[0].replace("cm", ""),
  "foot": arr[3],
  "country": arr[2],
  "league": arr[1],
  "team": arr[0],
  "position": document.querySelectorAll(".playercard-position")[0].innerText,
  "value": "0000",
  "rating": document.querySelectorAll(".playercard-rating")[0].innerText * 1,
  "ability": {
    "currently": "0000",
    "potential": "0000"
  },
  "skills": {
    pace: {
      index: document.querySelectorAll(".playercard-attr.playercard-attr1 .chembot-value")[0].innerText,
      accelation: f(cols[0].querySelectorAll(".player-stat-row")[0]),
      sprintSpeed: f(cols[0].querySelectorAll(".player-stat-row")[1])
    },
    attacking: {
      index: document.querySelectorAll(".playercard-attr.playercard-attr2 .chembot-value")[0].innerText,
      positioning: f(cols[1].querySelectorAll(".player-stat-row")[0]),
      finishing: f(cols[1].querySelectorAll(".player-stat-row")[1]),
      showPower: f(cols[1].querySelectorAll(".player-stat-row")[2]),
      longShots: f(cols[1].querySelectorAll(".player-stat-row")[3]),
      volleys: f(cols[1].querySelectorAll(".player-stat-row")[4]),
      penalties: f(cols[1].querySelectorAll(".player-stat-row")[5])
    },
    passing: {
      index: document.querySelectorAll(".playercard-attr.playercard-attr3 .chembot-value")[0].innerText,
      vision: f(cols[2].querySelectorAll(".player-stat-row")[0]),
      crossing: f(cols[2].querySelectorAll(".player-stat-row")[1]),
      freeKick: f(cols[2].querySelectorAll(".player-stat-row")[2]),
      shortPassing: f(cols[2].querySelectorAll(".player-stat-row")[3]),
      longPassing: f(cols[2].querySelectorAll(".player-stat-row")[4]),
      curve: f(cols[2].querySelectorAll(".player-stat-row")[5])
    },
    dribbling: {
      index: document.querySelectorAll(".playercard-attr.playercard-attr3 .chembot-value")[0].innerText,
      agility: f(cols[3].querySelectorAll(".player-stat-row")[0]),
      balance: f(cols[3].querySelectorAll(".player-stat-row")[1]),
      reactions: f(cols[3].querySelectorAll(".player-stat-row")[2]),
      ballControl: f(cols[3].querySelectorAll(".player-stat-row")[3]),
      dribbling: f(cols[3].querySelectorAll(".player-stat-row")[4]),
      composure: f(cols[3].querySelectorAll(".player-stat-row")[5])
    },
    defense: {
      index: document.querySelectorAll(".playercard-attr.playercard-attr4 .chembot-value")[0].innerText,
      interceptions: f(cols[4].querySelectorAll(".player-stat-row")[0]),
      heading: f(cols[4].querySelectorAll(".player-stat-row")[1]),
      defAwareness: f(cols[4].querySelectorAll(".player-stat-row")[2]),
      standingTackle: f(cols[4].querySelectorAll(".player-stat-row")[3]),
      slidingTackle: f(cols[4].querySelectorAll(".player-stat-row")[4])
    },
    physical: {
      index: document.querySelectorAll(".playercard-attr.playercard-attr5 .chembot-value")[0].innerText,
      jumping: f(cols[5].querySelectorAll(".player-stat-row")[0]),
      stamina: f(cols[5].querySelectorAll(".player-stat-row")[1]),
      strength: f(cols[5].querySelectorAll(".player-stat-row")[2]),
      aggression: f(cols[5].querySelectorAll(".player-stat-row")[3])
    }
  }
}