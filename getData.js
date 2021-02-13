var f = (p) => p.innerText.replace(/\n/g, " ").split(" ").reverse()[0],
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
        .replace(/-*$/,''),
    download = (filename, text) => {
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
      element.setAttribute('download', filename);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }

document.getElementById("info-tab").querySelectorAll(".player-sidebar-item").forEach(e => {
  arr.push(e.querySelectorAll(".player-sidebar-value")[0].innerText)
})

var obj = {}

if(document.querySelectorAll(".playercard-position")[0].innerText == "GK") {
  obj = {
    "id": location.pathname.split("/")[3] * 1,
    "fullname": document.querySelectorAll(".breadcrumb div:last-child")[0].innerText,
    "name": u(document.querySelectorAll(".breadcrumb div:last-child")[0].innerText),
    "birthday": arr[6].split(" - ")[1],
    "height": arr[7].split(" | ")[0].replace("cm", "") * 1,
    "foot": arr[3],
    "country": arr[2],
    "league": arr[1],
    "team": arr[0],
    "position": document.querySelectorAll(".playercard-position")[0].innerText,
    "value": 0,
    "rating": document.querySelectorAll(".playercard-rating")[0].innerText * 1,
    "ability": {
      "currently": 0,
      "potential": 0
    },
    "skills": {
      diving: document.querySelectorAll(".playercard-attr.playercard-attr1 .chembot-value")[0].innerText * 1,
      handling: document.querySelectorAll(".playercard-attr.playercard-attr2 .chembot-value")[0].innerText * 1,
      kicking: document.querySelectorAll(".playercard-attr.playercard-attr3 .chembot-value")[0].innerText * 1,
      reflexes: document.querySelectorAll(".playercard-attr.playercard-attr4 .chembot-value")[0].innerText * 1,
      speed: document.querySelectorAll(".playercard-attr.playercard-attr5 .chembot-value")[0].innerText * 1,
      positioning: document.querySelectorAll(".playercard-attr.playercard-attr6 .chembot-value")[0].innerText * 1
    }
  }
}
else {
  obj = {
    "id": location.pathname.split("/")[3] * 1,
    "fullname": document.querySelectorAll(".breadcrumb div:last-child")[0].innerText,
    "name": u(document.querySelectorAll(".breadcrumb div:last-child")[0].innerText),
    "birthday": arr[6].split(" - ")[1],
    "height": arr[7].split(" | ")[0].replace("cm", "") * 1,
    "foot": arr[3],
    "country": arr[2],
    "league": arr[1],
    "team": arr[0],
    "position": document.querySelectorAll(".playercard-position")[0].innerText,
    "value": 0,
    "rating": document.querySelectorAll(".playercard-rating")[0].innerText * 1,
    "ability": {
      "currently": 0,
      "potential": 0
    },
    "skills": {
      pace: {
        index: document.querySelectorAll(".playercard-attr.playercard-attr1 .chembot-value")[0].innerText * 1,
        accelation: f(cols[0].querySelectorAll(".player-stat-row")[0]) * 1,
        sprintSpeed: f(cols[0].querySelectorAll(".player-stat-row")[1]) * 1
      },
      attacking: {
        index: document.querySelectorAll(".playercard-attr.playercard-attr2 .chembot-value")[0].innerText * 1,
        positioning: f(cols[1].querySelectorAll(".player-stat-row")[0]) * 1,
        finishing: f(cols[1].querySelectorAll(".player-stat-row")[1]) * 1,
        showPower: f(cols[1].querySelectorAll(".player-stat-row")[2]) * 1,
        longShots: f(cols[1].querySelectorAll(".player-stat-row")[3]) * 1,
        volleys: f(cols[1].querySelectorAll(".player-stat-row")[4]) * 1,
        penalties: f(cols[1].querySelectorAll(".player-stat-row")[5]) * 1
      },
      passing: {
        index: document.querySelectorAll(".playercard-attr.playercard-attr3 .chembot-value")[0].innerText * 1,
        vision: f(cols[2].querySelectorAll(".player-stat-row")[0]) * 1,
        crossing: f(cols[2].querySelectorAll(".player-stat-row")[1]) * 1,
        freeKick: f(cols[2].querySelectorAll(".player-stat-row")[2]) * 1,
        shortPassing: f(cols[2].querySelectorAll(".player-stat-row")[3]) * 1,
        longPassing: f(cols[2].querySelectorAll(".player-stat-row")[4]) * 1,
        curve: f(cols[2].querySelectorAll(".player-stat-row")[5]) * 1
      },
      dribbling: {
        index: document.querySelectorAll(".playercard-attr.playercard-attr4 .chembot-value")[0].innerText * 1,
        agility: f(cols[3].querySelectorAll(".player-stat-row")[0]) * 1,
        balance: f(cols[3].querySelectorAll(".player-stat-row")[1]) * 1,
        reactions: f(cols[3].querySelectorAll(".player-stat-row")[2]) * 1,
        ballControl: f(cols[3].querySelectorAll(".player-stat-row")[3]) * 1,
        dribbling: f(cols[3].querySelectorAll(".player-stat-row")[4]) * 1,
        composure: f(cols[3].querySelectorAll(".player-stat-row")[5]) * 1
      },
      defense: {
        index: document.querySelectorAll(".playercard-attr.playercard-attr5 .chembot-value")[0].innerText * 1,
        interceptions: f(cols[4].querySelectorAll(".player-stat-row")[0]) * 1,
        heading: f(cols[4].querySelectorAll(".player-stat-row")[1]) * 1,
        defAwareness: f(cols[4].querySelectorAll(".player-stat-row")[2]) * 1,
        standingTackle: f(cols[4].querySelectorAll(".player-stat-row")[3]) * 1,
        slidingTackle: f(cols[4].querySelectorAll(".player-stat-row")[4]) * 1
      },
      physical: {
        index: document.querySelectorAll(".playercard-attr.playercard-attr6 .chembot-value")[0].innerText * 1,
        jumping: f(cols[5].querySelectorAll(".player-stat-row")[0]) * 1,
        stamina: f(cols[5].querySelectorAll(".player-stat-row")[1]) * 1,
        strength: f(cols[5].querySelectorAll(".player-stat-row")[2]) * 1,
        aggression: f(cols[5].querySelectorAll(".player-stat-row")[3]) * 1
      }
    }
  }
}

download(u(document.querySelectorAll(".breadcrumb div:last-child")[0].innerText), JSON.stringify(obj))