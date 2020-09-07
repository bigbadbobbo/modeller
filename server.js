const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view-engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/election', (req, res) => {
  res.render('election.ejs')
})

app.get('/help', (req, res) => {
  res.render('help.ejs')
})

app.post('/election', urlencodedParser, (req, res) => {
  const popular = req.body.popular
  const electoral = req.body.electoral
  const senate = req.body.senate
  const house = req.body.house
  const words = electionResults(popular, electoral, senate, house)
  res.render('./results.ejs', { words: words })
})

function electionResults(popular, electoral, senate, house)
{
  if(popular == '-1' && electoral == '-1' && senate == '-1' && house == '-1')
  {
    return "It's all gravy baby!"
  }
  else if(popular == '1' && electoral == '1' && senate == '1' && house == '1')
  {
    return "Donald Trump nominates 12 Supreme Court justices! He requires all police in Democratic cities to move to Republican cities. All Republicans are arrested and Democrats wait at home while the virus wipes out everyone. Climate change causes ocean to rise and come onto the land and tip the US over."
  }
  else
  {
    var ret = "All hell is breaking loose!"

    if(popular == '0')
    {
      ret = ret + ' Hateful violent MAGA rioters violently clash with mostly peaceful protesters.'
    }
    else if (popular == '-1')
    {
      ret = ret + ' The US people are respected in the global community.'
    }
    else
    {
      ret = ret + ' The European people look down at stupid US voters.'
    }

    if(electoral == '0')
    {
      ret = ret + ' Trump declares himself dictator for life.'
    }
    else if(electoral == '-1')
    {
      ret = ret + ' Ancient man Biden tries to undo all of the policies of old man Biden.'
    }
    else{
      ret = ret + ' Trump fails into a coma tweeting on the toilet, as per an unnamed source.'
    }

    if(senate == '0')
    {
      ret = ret + ' McConnell and Schumer settle things they way they did when they first started - through a duel.'
    }
    else if(senate == '-1')
    {
      ret = ret + ' Schumer cannot take office due to COVID restrictions in his jurisdiction.'
    }
    else{
      ret = ret + ' McConnell pushes 700 Federal judges through on his first day of his 30th term.'
    }

    if(house == '0')
    {
      ret = ret + " A mostly peaceful protester shoots a mostly peaceful bullet at a violent White supremacist - who is walking his White supremacist dog in a White supremacist manner - and the mostly peaceful shot causes Pelosi to have a heart attack."
    }
    else if(house == '-1')
    {
      ret = ret + " Russian salon owners protest Pelosi's 100th term in office."
    }
    else{
      ret = ret + ' Motion to mandate a chanting of "Lock her up" for 30 seconds before any official vote may be taken is passed.'
    }

    ret = ret + ' We all die!'
    return ret
  }
}

app.listen(3000)
