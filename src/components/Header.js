import { Grid } from "@material-ui/core"
import React from "react"

export default function Header() {
  return (
    <div>
      <div>Marcos Velasco</div>
      <Grid container direction='column'>
        <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
          one
        </Grid>
        <Grid item style={{ height: "40rem" }}>
          two
        </Grid>
        <Grid item style={{ backgroundColor: "#f4f4f4", height: "40rem" }}>
          three
        </Grid>
      </Grid>
    </div>
  )
}
