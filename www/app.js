
// App.js

enyo.kind({
name: "App",
kind: enyo.Control,
fit: !0,
n1: 0,
n2: 0,
style: "background-color: black; color: yellow",
components: [ {
name: "preg",
content: "",
style: "font-size: 300%"
}, {
name: "resp",
style: "font-size: 300%"
}, {
name: "b_preg",
kind: "Button",
content: "Pregunta",
style: "width: 100%; height: 2cm",
ontap: "fb_preg"
}, {
name: "b_resp",
kind: "Button",
content: "Respuesta",
style: "width: 100%; height: 2cm",
ontap: "fb_resp"
} ],
fb_preg: function() {
this.n1 = Math.floor(Math.random() * 100), this.n2 = Math.floor(Math.random() * 100);
var e = Math.floor(Math.random() * 9) + 1;
while (this.n1 < 90) this.n1 += e;
while (this.n2 < 90) this.n2 += e;
this.$.preg.setContent(this.n1 + "x" + this.n2), this.$.resp.setContent(" ");
},
fb_resp: function() {
this.$.resp.setContent(this.n1 * this.n2);
}
});
