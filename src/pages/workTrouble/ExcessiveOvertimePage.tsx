import { Box, List, ListItem, Paper, Typography } from "@mui/material";
import { MainPageLayout } from "../../style/MainPageLayout";

export const ExcessiveOvertimePage = () => {
  const styles = {
    paper: {
      padding: "5%",
      margin: "5%",
      marginTop: "0%",
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    sectionHeader: {
      fontSize: "2rem",
      color: "#fff",
      fontWeight: "bold",
      margin: "16px 0",
    },
    subSectionHeader: {
      fontSize: "1.5rem",
      color: "#fff",
      fontWeight: "bold",
      margin: "12px 0",
    },
    listItem: {
      fontSize: "1rem",
      color: "#fff",
      marginBottom: "3%",
    },
  };
  return (
    <MainPageLayout>
      <Box sx={{ overflow: "auto", height: "100%" }}>
        <Paper sx={styles.paper}>
          <Typography
            sx={{
              fontSize: "2.5rem",
              color: "#fff",
              fontWeight: "bold",
              margin: "16px 0",
            }}
          >
            月１００時間を超える残業又は月４５時間を超える恒常的な残業がある
          </Typography>
          <Typography sx={styles.sectionHeader}>まとめ</Typography>
          <Typography sx={styles.listItem}>
            36協定が締結・提出されていないにもかかわらず残業が行われた場合や36協定が正しく守られていない場合、月100時間を超える残業又は月45時間を超える恒常的な残業がある場合は、それらを会社に改善、報酬の補填をすることを求められる権利があります。
            <br />
            労働基準監督署に報告もしくは弁護士に相談するときに必要なものとして「雇用契約書」や「労働条件通知書」が上げられます。
            また、日々の労働時間などを記録して提出する必要がある場合があります。
          </Typography>
          <Typography sx={styles.sectionHeader}>
            1. 残業時間の上限は月45時間・年360時間
          </Typography>
          <Typography sx={styles.listItem}>
            法律が規定する残業時間の制限は、月に45時間および年に360時間です。平成31年4月に改正労働基準法が施行され、これらの規定が厳格に規定されました。
          </Typography>
          <Typography sx={styles.subSectionHeader}>
            残業を行うには36（サブロク）協定が必要
          </Typography>
          <Typography sx={styles.listItem}>
            労働基準法により、1日8時間および1週40時間を超える労働は基本的に禁止されています。残業が必要な場合、36（サブロク）協定を結び、労働基準監督署へ提出する必要があります。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            36協定があっても残業時間には上限がある
          </Typography>
          <Typography sx={styles.listItem}>
            36協定を結んだ場合でも、残業時間の上限は「月に45時間・年に360時間」と厳格に定められています。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            2. 45時間以上の残業が許可されるケース
          </Typography>
          <Typography sx={styles.listItem}>
            36協定を結んだ場合の上限は、月に45時間および年に360時間ですが、これを超える残業が許可される状況が存在します。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            特別条項が付いた36協定が締結された場合
          </Typography>
          <Typography sx={styles.listItem}>
            臨時の理由や特別な事情があり、制限時間を超えて労働が必要な場合には、「特別条項付き36協定」と呼ばれる協定を結ぶことができます。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            上限の制限が適用されない、または猶予が与えられる事業・業務の場合
          </Typography>
          <Typography sx={styles.listItem}>
            新技術や新商品の研究開発など一部の業務では上限の制約がかからない場合があります。一部の事業や業務においては上限の制約が免除されるか、あるいは一定の猶予が与えられることがあります。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            3. 残業上限を超えた場合の企業への罰則
          </Typography>
          <Typography sx={styles.listItem}>
            違法な残業が行われた場合、企業には刑罰が科されます。具体的な違法行為と刑罰については以下の通りです。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            違法とされる残業のケース
          </Typography>

          <List sx={styles.listItem}>
            <ListItem>
              36協定が締結・提出されていないにもかかわらず残業が行われた場合
            </ListItem>
            <ListItem>
              36協定は締結・提出されているが、36協定で規定された時間を超える残業が行われた場合
            </ListItem>
            <ListItem>
              ある月の残業時間と休日労働の合計が100時間以上になった場合
            </ListItem>
            <ListItem>
              残業時間と休日労働の合計の2～6か月平均が80時間を超えた場合
            </ListItem>
            <ListItem>月45時間超の残業が年に7回以上あった場合</ListItem>
          </List>

          <Typography sx={styles.subSectionHeader}>
            違法となった場合の企業に科される刑罰
          </Typography>
          <Typography sx={styles.listItem}>
            違法な残業を指示した管理職や、是正のための対策を怠った企業の代表者も刑罰の対象となります。具体的な刑罰は「6か月以下の懲役または30万円以下の罰金」です（労働基準法第119条）。
          </Typography>

          <Typography sx={styles.sectionHeader}>
            4. 長時間の残業が続く場合の対策
          </Typography>
          <Typography sx={styles.listItem}>
            長時間の残業が続く場合の対策として、以下のアプローチが考えられます。
          </Typography>

          <Typography sx={styles.subSectionHeader}>36協定を確認する</Typography>
          <Typography sx={styles.listItem}>
            所属する会社において36協定や特別条項付き36協定が結ばれているかどうかを確認することが重要です。
          </Typography>

          <Typography sx={styles.subSectionHeader}>
            労働基準監督署への通報
          </Typography>
          <Typography sx={styles.listItem}>
            企業の違法な行為が確認された場合、労働基準監督署へ通報することが有効な手段です。
          </Typography>

          <Typography sx={styles.subSectionHeader}> 弁護士への相談</Typography>
          <Typography sx={styles.listItem}>
            違法な残業が是正されることを望む場合、弁護士への相談が有益です。残業代請求には時効があるため、その期間に注意が必要です。
          </Typography>
        </Paper>
      </Box>
    </MainPageLayout>
  );
};
