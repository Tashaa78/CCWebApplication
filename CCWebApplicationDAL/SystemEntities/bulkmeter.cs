//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CCWebApplicationDAL.SystemEntities
{
    using System;
    using System.Collections.Generic;
    
    public partial class bulkmeter
    {
        public int ID { get; set; }
        public string Point { get; set; }
        public Nullable<double> latitude { get; set; }
        public Nullable<double> longitude { get; set; }
        public Nullable<double> Height { get; set; }
        public System.Data.Entity.Spatial.DbGeometry geom { get; set; }
    }
}
