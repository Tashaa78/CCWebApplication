//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCWebApplicationDAL.WaterAuditEntities
{
    using System;
    using System.Collections.Generic;
    
    public partial class wValf
    {
        public int id { get; set; }
        public string Point { get; set; }
        public Nullable<double> latitude { get; set; }
        public Nullable<double> longitude { get; set; }
        public Nullable<double> Height { get; set; }
        public string size { get; set; }
        public System.Data.Entity.Spatial.DbGeometry geom { get; set; }
        public Nullable<int> toaterial { get; set; }
        public Nullable<int> fromateria { get; set; }
    }
}
