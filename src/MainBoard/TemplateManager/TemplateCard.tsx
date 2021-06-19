import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CircularProgress, Divider, IconButton, ListItemIcon, Menu, MenuItem } from '@material-ui/core';
import MdiIcon from 'Components/common/MdiIcon';
import intl from 'react-intl-universal';
import { useShowServerError } from 'Store/Helpers/useInfoError';
import { useDragItStore } from 'Store/Helpers/useDragItStore';
import { IRxTemplate } from 'Base/Model/IRxTemplate';
import Image from 'Components/common/Image';
import { EditTemplateDialog } from './EditTemplateDialog';
import { useState } from 'react';
import { getImageThumbnail } from 'Data/helpers';
import { API_MAGIC_DELETE } from 'APIs/magic';
import useLayzyAxios from 'Data/useLayzyAxios';
import { mutate } from 'swr';
import { queryAllTemplates } from 'MainBoard/querys';
import { MagicDeleteBuilder } from 'Data/MagicDeleteBuilder';
import { RxTemplate } from '../../modelConstants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      //paddingTop: theme.spacing(2),
    },
    content: {
      display:'flex',
      flexFlow:'column',
      justifyContent:'center',
      alignItems:'center',
      cursor:'pointer',
      padding:theme.spacing(1),
    },
    actions:{
      diplay:'flex',
      justifyContent:'space-between',
      minHeight:theme.spacing(6),
      padding:theme.spacing(0,1),
    },
    pos: {
      //paddingLeft: theme.spacing(1),
    },

    menuItem:{
      padding:theme.spacing(1, 3),
    },

    menuButton:{
      width: '40px',
      height: '40px',
    },
  }),
);

export default function TemplateCard(
  props:{
    rxTemplate:IRxTemplate
  }
) {
  const {rxTemplate} = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const isMenuOpen = Boolean(anchorEl);
  const dragItStore = useDragItStore();

  const [excuteDelete, {loading, error}] = useLayzyAxios(API_MAGIC_DELETE,
    {
      onCompleted(data){
        dragItStore.setSuccessAlert(true);
        const url = queryAllTemplates.toUrl();
        mutate(url, 
          (data: any)=>{
            data.data = data?.data?.filter((template: IRxTemplate)=>template.id !== rxTemplate.id);
            return data;
          });
      }
    }
  );

  useShowServerError(error);
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleRemove = ()=>{
    setAnchorEl(null);
    dragItStore?.confirmAction(intl.get('confirm-delete'), ()=>{
      const data = new MagicDeleteBuilder()
        .setModel(RxTemplate)
        .addId(rxTemplate.id)
        .toData();
      excuteDelete({data});
    })

  }

  const handleEdit = ()=>{
    setAnchorEl(null);
    setOpen(true);
  }

  const handleClose = ()=>{
    setOpen(false);
  }
  
  return (
    <>
      <Card className={classes.root}>
        <CardContent 
          className={classes.content}
          onClick = {handleEdit}
        >
          <Image borderRadius = "0" src = {getImageThumbnail(rxTemplate.media?.fileName)}/>
          
        </CardContent>
        <CardActions className={classes.actions}>
          <Typography className={classes.pos}>
            {rxTemplate.name}
          </Typography>
          {
            loading 
            ? <CircularProgress size = {24}/>
            : <>
                <IconButton
                  onClick = {handleMenuOpen}
                  className = {classes.menuButton}
                >
                  <MdiIcon iconClass = "mdi-dots-horizontal" size={20} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  getContentAnchorEl={null}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={isMenuOpen}
                  onClose={handleMenuClose}
                  
                >
                  <MenuItem onClick={handleEdit} className = {classes.menuItem}>
                    <ListItemIcon>
                      <MdiIcon iconClass = "mdi-pencil"  size={18}/>
                    </ListItemIcon>
                    {intl.get('edit')} 
                  </MenuItem>
                  <Divider/>
                  <MenuItem onClick={handleRemove} className = {classes.menuItem}>
                    <ListItemIcon>
                      <MdiIcon iconClass = "mdi-delete-forever" color={'red'}  size={18}/>
                    </ListItemIcon>
                    {intl.get('delete')} 
                  </MenuItem>
                </Menu>
              </>
          }
        </CardActions>
      </Card>
      <EditTemplateDialog template = {rxTemplate} open = {open} onClose = {handleClose}/>
    </>
  );
}
