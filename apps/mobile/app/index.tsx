import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
const items = ["AI Chat", "AI Writing", "Image Generator", "CV Builder", "Homework Assistant", "Document Summariser", "Business Name Generator"];
export default function Home() {
  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <View style={s.brand}><Text style={s.mark}>M</Text><Text style={s.brandText}>MOZILERO AI</Text></View>
    <Text style={s.kicker}>IMAGINE. CREATE. WRITE. INNOVATE.</Text>
    <Text style={s.title}>Your ideas, powered by AI.</Text>
    <Text style={s.copy}>A single workspace for writing, learning, creating and getting work done.</Text>
    <Pressable style={s.button}><Text style={s.buttonText}>Explore your AI workspace</Text></Pressable>
    <Text style={s.heading}>AI tools</Text>
    {items.map((item,i)=><View key={item} style={s.item}><View style={s.number}><Text style={s.numberText}>{String(i+1).padStart(2,"0")}</Text></View><View><Text style={s.itemTitle}>{item}</Text><Text style={s.itemSub}>Planned for upcoming app releases</Text></View></View>)}
    <Text style={s.foot}>MOZILERO AI · Mobile app foundation</Text>
  </ScrollView>;
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:"#f8f9fd"},content:{padding:24,paddingTop:60},brand:{flexDirection:"row",alignItems:"center",gap:10},mark:{backgroundColor:"#3155d9",color:"white",fontWeight:"800",overflow:"hidden",padding:10,borderRadius:12},brandText:{fontSize:18,fontWeight:"800",color:"#17213b"},kicker:{color:"#6555cf",fontWeight:"800",fontSize:11,letterSpacing:1.2,marginTop:48},title:{fontSize:38,fontWeight:"800",color:"#101b3f",marginTop:12},copy:{fontSize:16,color:"#68738d",lineHeight:25,marginTop:12},button:{backgroundColor:"#3155d9",padding:16,borderRadius:12,marginTop:24,alignItems:"center"},buttonText:{color:"white",fontWeight:"700"},heading:{fontSize:22,fontWeight:"800",marginTop:42,marginBottom:16,color:"#17213b"},item:{flexDirection:"row",alignItems:"center",gap:14,backgroundColor:"white",borderColor:"#e9ecf4",borderWidth:1,padding:15,borderRadius:14,marginBottom:10},number:{backgroundColor:"#f0efff",padding:10,borderRadius:10},numberText:{color:"#6555cf",fontWeight:"800"},itemTitle:{fontSize:15,fontWeight:"700",color:"#17213b"},itemSub:{fontSize:12,color:"#8790a4",marginTop:4},foot:{textAlign:"center",color:"#9aa2b4",fontSize:11,marginTop:28,marginBottom:30}});
