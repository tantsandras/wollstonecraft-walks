import React from "react"
import styled, { keyframes } from "styled-components"
import Image from "../components/image"

const StepCircle = styled.div`
  position: relative;
  border-radius: 50%;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  line-height: 100px;
  background: rgba(246, 22, 210, 0.23);
  mix-blend-mode: multiply;
  text-align: center;
  vertical-align: middle;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
`

const StepNum = styled.p`
  font-family: Bungee Shade;
  z-index: 2;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  color: #ff008a;
  text-align: center;
`
const Direction = styled.li`
    position: relative;
    padding-left: 2.4rem;
    padding-bottom: 1.4rem;

`
const Arrow = styled.i`
    border-style: solid;
    border-color: ${props => (props.color)};
    border-width: 0px 2px 2px 0px;
    display: table-cell;
    position: absolute;
    top: 0rem;
    left: 0%;
    ms-transform: translateY(-50%);
    transform: translateY(-50%);
    padding: 0.6rem;
    transform: rotate(-45deg);
    Webkit-transform: rotate(-45deg);
  `
   
class Step2 extends React.Component {
  render() {
    return (
      <main>
        <div style={{ maxWidth: `200px`, maxHeight: `200px`, margin: `0 auto`, transform: `translate(120px, -40px)`, zIndex: `-1`,}}>
      <Image />
      </div>
        <StepCircle style={{marginTop: `-8rem`}}>
          <StepNum>2</StepNum>
        </StepCircle>
        <h3
          style={{
            fontFamily: `Yeseva One`,
            fontSize: `1.6rem`,
            textAlign: `center`,
            paddingTop: `1rem`,
          }}
        >
          Lizzy&#39;s on the Green
        </h3>
        <article
          style={{ padding: `5% 10% 3% 10%`, fontFamily: `Helvetica` }}
        >
        <h4 style={{ fontFamily: `Yeseva One` }}>Back to the directions -</h4>
        <br />
<ul style={{listStyle: `none`}}>
<Direction><Arrow color={"#FF0000"}></Arrow>
Take a look at the red brick houses just ahead of the cobblers; you are now in front of the
oldest surviving terrace in London. Note the brown door in the middle of the terrace – this
was originally a wider opening for horses to reach the stables which were the back of the
houses.
</Direction>
</ul>
<h4 style={{ fontFamily: `Yeseva One` }}>Did you know?</h4>
<blockquote>Built in 1658, the four buildings at 52-55 Newington Green have survived the Great Fire of
London as well as two World Wars.
<br />
Famous residents of the terrace have included Dr Richard Price, the famous preacher and
dissident, who moved into No 54 in 1758 (by this time the terrace was already a hundred
years old!). During the next few years, and no doubt due to his sympathies towards the
American Revolution, Price was visited at No 54 by many of the American ‘founding fathers’
including Thomas Jefferson, Benjamin Franklin and John Adams. Mary herself, of course,
would also have been a regular visitor. On this APP is a short film VINDICATION by
Fragments &amp; Monuments written by Kaethe Fine depicting one of these famous soirées; in it
Joseph Johnson, Wollstonecraft’s publisher, Tom Paine, William Godwin and Mary
Wollstonecraft dine and converse at the invitation of Richard Price.</blockquote>
<h4 style={{ fontFamily: `Yeseva One` }}>Back to the directions -</h4>
<br />
<ul style={{listStyle: `none`}}>
        <Direction><Arrow color={"#0031AD"}></Arrow>
        Put the terrace behind you by turning immediately left cross over the zebra crossing towards
Lizzy&#39;s on the Green. As you arrive at the cafe, look to the railings on your left and note the
history guide about the Green attached to them.</ Direction>
<Direction><Arrow color={"#FF008A"}></Arrow>
Walk past the history guide keeping it and the children’s playground on your left into
Newington Green. Turn immediately right and walk onto the decking of Lizzy&#39;s cafe and
wander down to the end of the tables. Settle yourself here for a few moments to enjoy our
next readings!</ Direction>
</ul>
<h3 style={{ fontFamily: `Yeseva One`, paddingTop: `1rem` }}>On Mary Wollstonecraft (1925)</h3>
<h4 style={{ fontFamily: `Yeseva One` }}>in <i>The Common Reader</i> by Virginia Woolf</h4>
Certainly Mary could say this with truth. When she was a little more than thirty she could
look back upon a series of actions which she had carried out in the teeth of opposition. She
had taken a house by prodigious efforts for her friend Fanny, only to find that Fanny’s mind
was changed and she did not want a house after all. She had started a school. She had
persuaded Fanny into marrying Mr. Skeys. She had thrown up her school and gone to Lisbon
alone to nurse Fanny when she died. On the voyage back she had forced the captain of the
ship to rescue a wrecked French vessel by threatening to expose him if he refused. And when,
overcome by a passion for Fuseli, she declared her wish to live with him and been refused
flatly by his wife, she had put her principle of decisive action instantly into effect, and had
gone to Paris determined to make her living by her pen. <br /><br />
The conflict of all these contradictions shows itself in her face, at once so resolute and so
dreamy, so sensual and so intelligent, and beautiful into the bargain with its great coils of hair
and the large bright eyes that Southey thought the most expressive he had ever seen. The life
of such a woman was bound to be tempestuous. Every day she made theories by which life
should be lived; and every day she came smack against the rock of other people’s prejudices.
Every day too — for she was no pedant, no cold-blooded theorist — something was born in
her that thrust aside her theories and forced her to model them afresh. <br /><br />
Mary’s life had been an experiment from the start, an attempt to make human conventions
conform more closely to human needs. And her eventual marriage to Godwin was only a
beginning; all sorts of things were to follow after. Mary was going to have a child. She was
going to write a book to be called The Wrongs of Women. She was going to reform
education. She was going to come down to dinner the day after her child was born - that
experiment was her last. She died in child-birth. She whose sense of her own existence was so
intense, who had cried out even in her misery, “I cannot bear to think of being no more — of
losing myself — nay, it appears to me impossible that I should cease to exist”, died at the age

of thirty-six. But she has her revenge. Many millions have died and been forgotten in the
hundred and thirty years that have passed since she was buried; and yet as we read her letters
and listen to her arguments and consider her experiments, and realise the high-handed and
hot-blooded manner in which she cut her way to the quick of life, one form of immortality is
hers undoubtedly: she is alive and active, she argues and experiments, we hear her voice and
trace her influence even now among the living. <br /><br />

<section style={{float: `right`, paddingLeft: `2.8rem`, borderLeft: `4px double #ff008a`, paddingBottom: `2.6rem`}}>
<h3 style={{ fontFamily: `Yeseva One`, paddingTop: `4rem` }}>If People Disapprove of You (2012)</h3> 
<h4 style={{ fontFamily: `Yeseva One` }}>by Sophie Hannah</h4>
<p style={{fontSize: `0.8rem`, }}>Make being disapproved of your hobby.<br />
Make being disapproved of your aim.<br />
Devise new ways of scoring points<br />
In the Being Disapproved Of Game.<br /> 
<br />
Let them disapprove in their dozens.<br />
Let them disapprove in their hordes.<br />
You’ll fnd that being disapproved of<br />
Builds character, brings rewards.<br />
<br />
Just like any form of striving<br />
Don’t be arrogant; don’t coast<br />
On your high disapproval rating.<br />
Try to be disapproved of most.<br />
<br />
At this point, if it’s useful,<br />
Draw a pie chart or a graph.<br />
Show it to someone who disapproves.<br />
When they disapprove, just laugh.<br />
<br />
Count the emotions you provoke:<br />
Anger, suspicion, shock.<br />
One point for each of these<br />
And two for each boat you rock.<br />
<br />
Feel yourself warming to your task –<br />
You do it bloody well.<br />
At last you’ve found an area<br />
In which you can excel.<br />
<br />
Savour the thrill of risk without<br />
The fear of getting caught.<br />
Whether they sulk or scream or pout,<br />
Enjoy your new-found sport.<br />
<br />
Meanwhile all those who disapprove<br />
While you are having fun<br />
Won’t even know your game exists<br />
So tell yourself you’ve won.<br />
<br /></p>
</section>
<br />
<section>
<h3 style={{ fontFamily: `Yeseva One`, paddingTop: `10rem`}}>
The Tea of Consent (2015)</h3> 
<h4 style={{fontFamily: `Yeseva One`,}}>by Rockstar Dinosaur Pirate Princess</h4>
<p>
It seems a lot of people really, REALLY don’t get what ‘consent’  means. It seems people
really have a problem understanding that before you have sex with someone, and that’s <i>every</i> 
time you have sex with them, <i>make sure they want to have sex with you.</i> This goes for men,
women, everyone. Whoever you are initiating sexytimes with, just make sure they are actually
genuinely up for it. That’s it. It’s not hard. Really. <br /><br />
If you’re still struggling, just imagine instead of initiating sex, you’re making them a cup of tea.
<br /><br />
You say “hey, would you like a cup of tea?” and they go “omg yes, I would LOVE a cup of tea!
Thank you!” then you know they want a cup of tea.
<br /><br />
If you say “hey, would you like a cup of tea?” and they um and ahh and say, “I’m not really
sure…” then you can make them a cup of tea or not, but be aware that they might not drink
it, and if they don’t drink it then – this is the important bit –  <i>don’t make them drink it.</i> You
can’t blame them for you going to the effort of making the tea on the off-chance they wanted
it; you just have to deal with them not drinking it. Just because you made it doesn’t mean you
are entitled to watch them drink it.
<br /><br />
If they say “No thank you” then don’t make them tea. At all. Don’t make them tea, don’t
make them drink tea, don’t get annoyed at them for not wanting tea. They just don’t want tea,
ok?
<br /><br />
They might say “Yes please, that’s kind of you” and then when the tea arrives they actually
don’t want the tea at all. Sure, that’s kind of annoying as you’ve gone to the effort of making
the tea, but they remain under no obligation to drink the tea. They did want tea, now they
don’t. Sometimes people change their mind in the time it takes to boil that kettle, brew the tea
and add the milk. And it’s ok for people to change their mind, and you are still not entitled to
watch them drink it even though you went to the trouble of making it.
<br /><br />
If they are unconscious, don’t make them tea. Unconscious people don’t want tea and can’t
answer the question “do you want tea” because they are <i>unconscious.</i>
<br /><br />
Ok, maybe they were conscious when you asked them if they wanted tea, and they said yes,
but in the time it took you to boil that kettle, brew the tea and add the milk they are
now unconscious. You should just put the tea down, make sure the unconscious person is safe,
and  – this is the important bit – don’t make them drink the tea. They said yes then, sure, but
unconscious people don’t want tea.
<br /><br />
If someone said yes to tea, started drinking it, and then passed out before they’d finished it,
don’t keep on pouring it down their throat. Take the tea away and make sure they are safe.
 Because <i>unconscious people don’t want tea.</i> Trust me on this.
<br /><br />
If someone said “yes” to tea around your  house last saturday, that doesn’t mean that they
want you to make them tea all the time. They don’t want you to come around unexpectedly
to their place and make them tea and force them to drink it going “BUT YOU WANTED
TEA LAST WEEK”, or to wake up to find you pouring tea down their throat going “BUT
YOU WANTED TEA LAST NIGHT”.
<br /><br />
Is a stupid analogy? Of course we wouldn’t force feed someone tea because they said yes to a
cup last week. Of COURSE we wouldn’t pour tea down the throat of an unconcious person
because they said yes to tea 5 minutes ago when they were conscious. But if we can
understand how completely ludicrous it is to force people to have tea when they don’t want
tea, and we are able to understand when people don’t want tea, then how hard is it to
understand when it comes to sex?
<br /><br />
Whether it’s tea or sex, Consent Is Everything.
<br /><br />
And on that note, I am going to make myself a cup of tea because tea is brilliant.
<br /><br />
</p>
</section>
        </article>
      </main>
    )
  }
}

export default Step2
