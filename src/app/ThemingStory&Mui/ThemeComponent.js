

export const components = {
    MuiCard: {
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                backgroundColor: theme.palette.grey[400],
                color: theme.palette.common.black,
                boxShadow: ownerState.variant === "custom" ? theme.shadows[1] : ownerState.variant === "custom2" ? theme.shadows[2] : ownerState.variant === "custom3" ? theme.shadows[3] : theme.shadows[4],
            }

            )

        }

    },
    MuiCardHeader: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: "18px"
            }),
            content: ({ theme }) => ({
                flex: " auto"
            }),
            title:({theme})=>({
                ...theme.typography.body1
            }),
            subheader: ({ theme }) => ({
                color: theme.palette.grey[600],
                
            }),
            avatar: ({ theme }) => ({
                marginRight: 20
            }),
            action: ({ theme }) => ({
                flex: '0 0 auto',
                alignSelf: 'center',
                marginTop: -18,
                marginRight: -10,
                marginBottom: -2
            }),


        },

    },
    MuiAvatar: {
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                width: 50,
                height: 50,
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                lineHeight: 1,

            }),
            colorDefault: ({ theme }) => ({
                backgroundColor: theme.palette.grey[600],
                color: theme.palette.grey[300]
            })
        }
    },

    MuiCardActions: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: "10px",
            })
        }
    },

    MuiCardMedia: {
        styleOverrides: {
            root: ({ theme }) => ({
                with: "30px"
            }),
            media: ({ theme }) => ({

            })
        }
    },

    MuiCardContent: {
        styleOverrides: {
            root: ({ theme }) => ({
                padding: " 5px 18px 2px 18px",

            })
        }
    },

    MuiButton: {

        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                minWidth: 64,
                padding: '10px 20px',
                borderRadius: "7px",
                

            }),
            outlined: ({ theme }) => ({
                color: theme.palette.common.black,
                boxShadow: theme.shadows[5]
            }),
            outlinedSizeSmall: ({ theme }) => ({
                padding: '6px 18px',
            })
        }
    },
    MuiButtonGroup: {
        styleOverrides: {
            root: ({ theme, ownerState }) => ({
                borderRadius: 11
            }),

            outlined: ({ theme }) => ({
                boxShadow: theme.shadows[1]
            }),
            contained: ({ theme }) => ({
                boxShadow: theme.shadows[0]
            }),
            vertical: ({ theme }) => ({
                flexDirection: 'column'
            }),
            grouped: ({ theme }) => ({
                minWidth: 70
            }),
            groupedVertical: ({ theme }) => ({
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                borderBottomLeftRadius: 10
            }),
            groupedHorizontal: ({ theme }) => ({
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 11,
                borderTopRightRadius: 11,
                borderBottomRightRadius: 0
            })
        }
    },


    MuiTypography: {
        styleOverrides: {
            root: ({ theme }) => ({
                margin: "1px"
            }),
            body1: ({ theme }) => ({
                ...theme.typography.body1
            })
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.grey[700]


            }),
            sizeMedium: ({ theme }) => ({

            })
        }
    },
    MuiCheckbox: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.grey[700]
            }),
            colorPrimary: ({ theme }) => ({
                color: theme.palette.grey[800]
            })
        }
    },

    Mui: {
        styleOverrides: {
            checked: {}
        }
    },
    MuiFab: {
        styleOverrides: {
            root: ({ theme, ownerState }) => ({

                backgroundColor: ownerState.color === "default" ? theme.palette.grey[500] : ""
            }),
            extended: ({ theme }) => ({
                borderRadius: 24,
                padding: '0 16px',
                width: 'auto',
                minHeight: 'auto',
                minWidth: 48,
                height: 48
            }),
            primary: ({ theme }) => ({
                color: theme.palette.common.white,
            }),
            // focusVisible:({theme})=>({
            //     boxShadow:theme.shadows[11]
            // }),
            // disabled:({theme})=>({
            //     backgroundColor:theme.palette.primary.main,
            //     color:"rgba(255,0,0,1)"

            // })
            sizeSmall: ({ theme }) => ({
                width: 45,
                height: 45
            }),
            sizeMedium: ({ theme }) => ({
                width: 53,
                height: 53
            })
        }
    },
    MuiList: {
        styleOverrides: {
            root: ({ theme }) => ({
                margin: 0,
                padding: 0,
                position: 'relative'
            }),
            padding: ({ theme }) => ({
                paddingTop: 8,
                paddingBottom: 8
            }),
            subheader: ({ theme }) => ({
                paddingTop: 2
            })
        }
    },
    MuiListItem: {
        styleOverrides: {
            root: ({ theme }) => ({
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                position: 'relative',
                textDecoration: 'none',
                width: '100%',
                boxSizing: 'border-box',
                textAlign: 'right'
            }),
            dense:({theme})=>({
                paddingTop: 2,
                paddingBottom: 2
            }),
            gutters:({theme})=>({
                paddingLeft: 14,
                paddingRight: 14
            }),
            padding:({theme})=>({
                paddingTop: 8,
                paddingBottom: 8
            }),
            secondaryAction:({theme})=>({
                paddingRight: 48
            })
        }
    }

}