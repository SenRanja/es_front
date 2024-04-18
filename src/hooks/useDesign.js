/**
 * @Author: 仙道
 * @Date: 2024-04-07 16:48:53
 * @LastEditTime: 2024-04-07 16:49:02
 * @email: hao.li08@weimob.com
 * @Description: 
 * @FilePath: /es_front/src/hooks/useDesign.js
 **/
import variables from '~/styles/variables.module.less'

export const useDesign = () => {
  const lessVariables = variables

  /**
   * @param scope 类名
   * @returns 返回空间名-类名
   */
  const getPrefixCls = (scope) => {
    return `${lessVariables.namespace}-${scope}`
  }

  return {
    variables: lessVariables,
    getPrefixCls
  }
}
